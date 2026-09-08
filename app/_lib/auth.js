import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_KEY,
);

const authConfig = {
    providers: [
        // ============================================
        // 🔵 Google Authentication
        // ============================================
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),

        // ============================================
        // 🔐 Email / Password Authentication
        // ============================================
        Credentials({
            name: "Credentials",

            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },

                password: {
                    label: "Password",
                    type: "password",
                },
            },

            async authorize(credentials) {
                // ============================================
                // 1. بررسی ورودی‌ها
                // ============================================

                const email = credentials?.email;
                const password = credentials?.password;

                if (typeof email !== "string" || typeof password !== "string") {
                    return null;
                }

                // ============================================
                // 2. پیدا کردن کاربر در Supabase
                // ============================================

                const { data: user, error } = await supabase
                    .from("users")
                    .select("id, email, full_name, password_hash, role, status")
                    .eq("email", email)
                    .maybeSingle();

                if (error) {
                    console.error("Supabase login error:", error);
                    return null;
                }

                if (!user) {
                    return null;
                }

                // ============================================
                // 3. بررسی وضعیت حساب
                // ============================================

                if (user.status === "inactive" || user.status === "suspended") {
                    return null;
                }

                // ============================================
                // 4. اگر کاربر Google باشد
                // password_hash ندارد
                // ============================================

                if (!user.password_hash) {
                    return null;
                }

                // ============================================
                // 5. بررسی Password
                // ============================================

                const isValidPassword = await bcrypt.compare(
                    password,
                    user.password_hash,
                );

                if (!isValidPassword) {
                    return null;
                }

                // ============================================
                // 6. بروزرسانی آخرین ورود
                // ============================================

                const { error: updateError } = await supabase
                    .from("users")
                    .update({
                        last_login: new Date().toISOString(),
                    })
                    .eq("id", user.id);

                if (updateError) {
                    console.error("Last login update error:", updateError);
                }

                // ============================================
                // 7. کاربر معتبر
                // NextAuth از این object برای ساخت Session
                // استفاده می‌کند
                // ============================================

                return {
                    id: String(user.id),
                    name: user.full_name,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],

    // ============================================
    // صفحات Authentication
    // ============================================

    pages: {
        signIn: "/login",
    },

    // ============================================
    // Callbacks
    // ============================================

    callbacks: {
        // --------------------------------------------
        // Middleware Authorization
        // --------------------------------------------

        authorized({ auth }) {
            return !!auth?.user;
        },

        // --------------------------------------------
        // JWT
        // --------------------------------------------

        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;

                if (user.role) {
                    token.role = user.role;
                }
            }

            return token;
        },

        // --------------------------------------------
        // Session
        // --------------------------------------------

        async session({ session, token }) {
            if (session.user) {
                if (token.id) {
                    session.user.id = token.id;
                }

                if (token.role) {
                    session.user.role = token.role;
                }
            }

            return session;
        },
    },
};

export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST },
} = NextAuth(authConfig);
