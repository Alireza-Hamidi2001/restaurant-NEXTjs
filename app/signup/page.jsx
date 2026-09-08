"use client";
import { manualRegister } from "@/app/actions/manualAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

function SignupPage() {
    const router = useRouter();
    const [passShow, setPassShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    function handleEyeShowPass() {
        setPassShow((prev) => !prev);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters long", {
                duration: 4000,
            });
            setLoading(false);
            return;
        }

        try {
            const form = new FormData();
            form.append("fullName", formData.fullName);
            form.append("email", formData.email);
            form.append("password", formData.password);

            const result = await manualRegister(form);

            if (result.error) {
                toast.error(result.error, {
                    duration: 5000,
                });
            } else {
                toast.success("Signup seccessful. Redirecting to the login page.", {
                    duration: 3000,
                });

                setFormData({
                    fullName: "",
                    email: "",
                    password: "",
                });

                setTimeout(() => {
                    router.push("/login");
                }, 1000);
            }
        } catch (err) {
            toast.error("Server error. Please try again", {
                duration: 5000,
            });
        } finally {
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
                    <h1 className="text-[3rem] font-extrabold">Sign up</h1>
                    <p className="text-[1rem] text-white/50 mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-1 md:gap-4">
                    <div className="h-px w-30 md:w-40 bg-white/40"></div>
                    <h1 className="text-sm text-white/40">
                        Or sign up with Email
                    </h1>
                    <div className="h-px w-30 md:w-40 bg-white/40"></div>
                </div>

                <label
                    htmlFor="username"
                    className="text-sm"
                >
                    Full Name *
                </label>
                <input
                    type="text"
                    id="username"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="bg-white/5 rounded-sm p-2 backdrop-blur-[5px] mb-2 focus:outline focus:outline-white"
                />

                <label
                    htmlFor="email"
                    className="text-sm"
                >
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
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
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
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
                    {loading ? "Signing up..." : "Sign up"}
                </button>

                <Link
                    href="/login"
                    className="transition-all duration-300 max-w-fit text-[0.8rem] my-2 text-white/60 border-b border-white/60 hover:border-white hover:text-white cursor-pointer"
                >
                    Already have an account? Login
                </Link>
            </form>
        </div>
    );
}

export default SignupPage;
