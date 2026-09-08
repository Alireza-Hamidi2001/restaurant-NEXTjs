import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import ContactForm from "../_components/ContactForm";
import Footer from "../_components/Footer";

export const metadata = {
    title: "Contact us",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center">
                <div className="text-center px-4">
                    <div className="animate-fade-in flex items-center justify-center gap-2 md:gap-4">
                        <div className="h-px w-20 md:w-40  bg-linear-to-r from-transparent to-white"></div>
                        <h1 className="text-2xl md:text-6xl font-bold mb-4">
                            Contact us
                        </h1>
                        <div className="h-px w-20 md:w-40 bg-linear-to-l from-transparent to-white"></div>
                    </div>
                    <p className="animate-fade-up text-white/50 text-sm md:text-2xl max-w-2xl mx-auto">
                        We&apos;d Love to Hear From You
                    </p>
                </div>
            </section>
            {/* Contact Info Cards */}
            <section className="animate-fade-up-2 max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 p-8">
                    {/* LinkedIn Card */}
                    <div className="relative rounded-3xl p-8 text-center hover:border-white/20 transition-all duration-300">
                        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-5 bg-[#0A66C2] animate-bounce w-32 h-32 rounded-full"></div>

                        <div className="mb-4">
                            <FaLinkedin className="mx-auto w-14 h-14 text-[#0A66C2]" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            LinkedIn
                        </h3>
                        <p className="text-white/50 mb-4">
                            Connect with us professionally
                        </p>
                        <Link
                            href="https://www.linkedin.com/in/alireza-hamidi-aa8547288"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#0A66C2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0A66C2]/80 transition"
                        >
                            Visit LinkedIn
                        </Link>
                    </div>

                    {/* Email Card */}
                    <div className="relative rounded-3xl p-8 text-center hover:border-white/20 transition-all duration-300">
                        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-5 bg-amber-600 animate-bounce w-32 h-32 rounded-full"></div>
                        <div className="mb-4">
                            <MdEmail className="mx-auto w-14 h-14 text-amber-600" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            Email
                        </h3>
                        <p className="text-white/50 mb-4">
                            Send us a message anytime
                        </p>
                        <Link
                            href="https://mail.google.com/mail/u/0/?fs=1&to=alireza.hamidi.eng@gmail.com&tf=cm"
                            className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
                        >
                            Send Email
                        </Link>
                    </div>
                </div>
            </section>
            {/* Additional Info - Location & Hours */}
            <section className="animate-fade-up-2 py-16 mx-4 md:mx-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Location */}
                        <div className="text-center">
                            <div className="mb-4">
                                <FaLocationDot className="w-15 h-15 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3">
                                Our Location
                            </h3>
                            <p className="text-white/50 leading-relaxed">
                                123 Persian Avenue,
                                <br />
                                Downtown District,
                                <br />
                                Tehran, Iran
                            </p>
                            <div className="mt-4">
                                <Link
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-600 hover:text-amber-500 transition"
                                >
                                    View on Google Maps →
                                </Link>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="text-center">
                            <div className="mb-4">
                                <IoTimeOutline className="w-15 h-15 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3">
                                Opening Hours
                            </h3>
                            <div className="space-y-2 text-white/50">
                                <p className="flex items-center gap-2 justify-center">
                                    <FaCalendarDays />
                                    <span className="text-white">
                                        Monday - Saturday :
                                    </span>{" "}
                                    11:00 AM - 11:00 PM
                                </p>
                                <p className="flex items-center gap-2 justify-center">
                                    <FaCalendarDays />
                                    <span className="text-white">
                                        Sunday :
                                    </span>{" "}
                                    Close
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form - کامپوننت کلاینت */}
            <ContactForm />
            {/* CTA */}
            <section className="bg-gray-900/20 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">Visit Us Today</h2>
                    <p className="text-xl mb-8 text-white/50">
                        Experience the best of Persian and international cuisine
                        in a warm and welcoming atmosphere.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/menu"
                            className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition"
                        >
                            View Our Menu
                        </Link>
                        <Link
                            href="/about"
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-700 transition"
                        >
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
