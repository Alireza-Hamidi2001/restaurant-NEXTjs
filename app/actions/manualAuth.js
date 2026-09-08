"use server";

import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

// ============================================
// Supabase
// ============================================

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_KEY,
);

// ============================================
//  ثبت‌نام کاربر جدید
// ============================================

export async function manualRegister(formData) {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");

    // ============================================
    // 1. اعتبارسنجی ورودی‌ها
    // ============================================

    if (!fullName || !email || !password) {
        return {
            error: "All fields are required",
        };
    }

    // ============================================
    // 2. اعتبارسنجی Email
    // ============================================

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return {
            error: "Email address is not valid.",
        };
    }

    // ============================================
    // 3. اعتبارسنجی Password
    // ============================================

    if (password.length < 8) {
        return {
            error: "Password must be at least 8 characters long",
        };
    }

    try {
        // ============================================
        // 4. بررسی تکراری نبودن Email
        // ============================================

        const { data: existingUser, error: checkError } = await supabase
            .from("users")
            .select("id")
            .eq("email", email)
            .maybeSingle();

        if (checkError) {
            console.error("Check existing user error:", checkError);

            return {
                error: "Error checking user information",
            };
        }

        if (existingUser) {
            return {
                error: "This email is already registered",
            };
        }

        // ============================================
        // 5. Hash کردن Password
        // ============================================

        const salt = await bcrypt.genSalt(12);

        const passwordHash = await bcrypt.hash(password, salt);

        // ============================================
        // 6. ذخیره User در Supabase
        // ============================================

        const { data: user, error: insertError } = await supabase
            .from("users")
            .insert({
                full_name: fullName,
                email: email,
                password_hash: passwordHash,
                email_verified: false,
                role: "user",
                status: "active",
            })
            .select("id, email, full_name, role")
            .single();

        if (insertError) {
            console.error("Supabase insert error:", insertError);

            return {
                error: "Registration failed. Please try again",
            };
        }

        // ============================================
        // 7. ثبت‌نام موفق
        // ============================================

        return {
            success: true,

            message: "Registration successful",

            user: {
                id: user.id,
                email: user.email,
                fullName: user.full_name,
                role: user.role,
            },
        };
    } catch (error) {
        console.error("Registration error:", error);

        return {
            error: "Server error. Please try again",
        };
    }
}