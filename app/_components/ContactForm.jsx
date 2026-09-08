"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    FaCheckCircle,
    FaExclamationCircle
} from "react-icons/fa";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                reset(); // پاک کردن فرم
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus("error");
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        } catch (error) {
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="bg-gray-900/20 rounded-3xl border border-gray-900 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                    Send Us a Message
                </h2>

                {/* وضعیت ارسال */}
                {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-xl flex items-center gap-3 text-white">
                        <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>
                            Your message has been sent successfully! We&apos;ll
                            get back to you soon.
                        </span>
                    </div>
                )}

                {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-xl flex items-center gap-3 text-white">
                        <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
                        <span>
                            Something went wrong. Please try again later.{" "}
                            
                        </span>
                    </div>
                )}

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-white/75 mb-2 text-sm font-medium">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className={`w-full bg-gray-900/50 border rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition ${
                                    errors.name
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-gray-800 focus:border-white/60"
                                }`}
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                            {errors.name && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-white/75 mb-2 text-sm font-medium">
                                Your Email *
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className={`w-full bg-gray-900/50 border rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition ${
                                    errors.email
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-gray-800 focus:border-white/60"
                                }`}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-white/75 mb-2 text-sm font-medium">
                            Subject *
                        </label>
                        <input
                            type="text"
                            placeholder="Reservation inquiry"
                            className={`w-full bg-gray-900/50 border rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition ${
                                errors.subject
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-gray-800 focus:border-white/60"
                            }`}
                            {...register("subject", {
                                required: "Subject is required",
                            })}
                        />
                        {errors.subject && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-white/75 mb-2 text-sm font-medium">
                            Message *
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Tell us how we can help..."
                            className={`w-full bg-gray-900/50 border rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none transition resize-none ${
                                errors.message
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-gray-800 focus:border-white/60"
                            }`}
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white py-3 rounded-full font-semibold hover:from-amber-600 hover:to-amber-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
