"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Page() {
    const router = useRouter();

    const [passShow, setPassShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleEyeShowPass() {
        setPassShow((prev) => !prev);
    }

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        if (!formData.email || !formData.password) {
            toast.error("Fill out all fields.", {
                duration: 4000,
            });
            setLoading(false);
            return;
        }

        try {
            const result = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (result?.error) {
                toast.error("Email or password incorrect.", {
                    duration: 5000,
                });
                setLoading(false);
                return;
            }

            toast.success("Login successful.", {
                duration: 3000,
            });

            setFormData({
                email: "",
                password: "",
            });

            router.push("/profile");
            router.refresh();
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Server error. Please try again.", {
                duration: 5000,
            });
        } finally {
            setLoading(false);
        }
    }

    async function handleGoogleLogin() {
        setLoading(true);
        try {
            await signIn("google", {
                callbackUrl: "/profile",
            });
        } catch (error) {
            console.error("Google login error:", error);
            toast.error("Login with Google failed. Try again later", {
                duration: 5000,
            });
            setLoading(false);
        }
    }

    return (
        <div className="p-2 md:p-8 relative h-[calc(100vh-3.75rem)] mt-15">
            <div className="absolute rounded-xl top-4 left-4 w-48 h-48 bg-white/10"></div>
            <div className="absolute rounded-full top-32 left-32 w-48 h-48 bg-white/8"></div>
            <div className="absolute rounded-xl bottom-4 left-4 w-32 h-32 bg-white/7"></div>
            <div className="absolute rounded-3xl bottom-4 right-4 w-32 h-32 bg-white/6"></div>
            <div className="absolute rounded-lg bottom-32 right-32 w-64 h-64 bg-white/5"></div>
            <div className="absolute rounded-full right-0 w-32 h-32 bg-white/4"></div>
            <div className="absolute rounded-5xl right-[60%] bottom-[50%] translate-x-[50%] translate-y-[50%] w-64 h-64 bg-white/5"></div>
            <div className="absolute rounded-full left-[50%] top-[50%] -translate-[50%_50%] w-48 h-48 bg-white/2"></div>
            <div className="absolute rounded-full right-[50%] bottom-[50%] w-48 h-48 bg-white/10"></div>

            <form
                onSubmit={handleSubmit}
                className="relative max-w-fit flex flex-col rounded-sm bg-white/20 backdrop-blur-[5px] p-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-[3rem] font-extrabold">Login</h1>
                    <p className="text-[1rem] text-white/50">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="flex mb-4 border border-white/20 rounded-lg items-center gap-1 bg-white/80 px-4 py-1 text-sm hover:border-white/30 hover:bg-white/95 text-black font-semibold transition-all duration-300 max-w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FcGoogle className="w-5 h-5" />
                        Login With Google
                    </button>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-40 bg-white/40"></div>
                    <h1 className="text-sm text-white/40">
                        Or login with Email
                    </h1>
                    <div className="h-px w-40 bg-white/40"></div>
                </div>

                <label
                    htmlFor="email"
                    className="text-sm"
                >
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 rounded-sm p-2 backdrop-blur-[5px] mb-2 focus:outline focus:outline-white"
                />

                <label
                    htmlFor="password"
                    className="text-sm"
                >
                    Password *
                </label>
                <div className="relative">
                    <input
                        type={!passShow ? "password" : "text"}
                        required
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full bg-white/5 rounded-sm p-2 backdrop-blur-[5px] mb-2 focus:outline focus:outline-white"
                    />
                    {!passShow ? (
                        <FaEye
                            className="absolute top-2.5 right-2.5 cursor-pointer"
                            onClick={handleEyeShowPass}
                        />
                    ) : (
                        <FaEyeSlash
                            className="absolute top-2.5 right-2.5 cursor-pointer"
                            onClick={handleEyeShowPass}
                        />
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black rounded-sm border-none transition-all duration-300 outline-none cursor-pointer p-2 mt-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <Link
                    href="/signup"
                    className="max-w-fit text-sm my-2 text-white/60 border-b border-white/60 hover:border-white hover:text-white cursor-pointer"
                >
                    Don&apos;t have an account yet?
                </Link>
            </form>
        </div>
    );
}

export default Page;
