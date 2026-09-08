"use client";

import Link from "next/link";
import { FaArrowLeft, FaHome, FaUtensils } from "react-icons/fa";

function GoBackButton() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
                href="/"
                className="group relative inline-flex items-center gap-2 px-5 py-4 bg-transparent text-gray-300  rounded-xl hover:text-white transition-all duration-300"
            >
                <FaHome className="w-5 h-5 group-hover:rotate-[-10deg] transition-transform duration-300" />
                <span>Home</span>
            </Link>

            <Link
                href="/menu"
                className="group relative inline-flex items-center gap-2 px-5 py-4 bg-transparent text-gray-300  rounded-xl hover:text-white transition-all duration-300"
            >
                <FaUtensils className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Menu</span>
            </Link>
            <button
                onClick={() => window.history.back()}
                className="group relative inline-flex items-center gap-2 px-5 py-4 bg-transparent text-gray-300  rounded-xl hover:text-white transition-all duration-300"
            >
                <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Go Back</span>
            </button>
        </div>
    );
}

export default GoBackButton;
