"use client";

import { FaTimes } from "react-icons/fa";
import { useState } from "react";

function ModalTImeShow() {
    const [showModal, setShowModal] = useState(true);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const fullDay = currentTime.toLocaleDateString("en-US", {
        weekday: "long",
    });
    const isOpen = fullDay !== "Sunday" && hours <= 22 && hours >= 11;

    function clickHandler() {
        setShowModal((prev) => !prev);
    }
    if (!showModal) {
        return null;
    }
    return (
        <div
            className={`fixed z-50 opacity-40 right-8 bottom-8 px-6 py-2 md:py-4 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 border hover:opacity-100 ${
                isOpen
                    ? "bg-green-600/80 border-green-400/40 shadow-green-500/20 backdrop-blur-2xl"
                    : "bg-red-600/80 border-red-400/40 shadow-red-500/20"
            }`}
        >
            <div className="flex items-center gap-1 md:gap-4">
                <span
                    className={`w-3 h-3 rounded-full ${
                        isOpen ? "bg-green-300 animate-ping" : "bg-red-300"
                    }`}
                ></span>

                <p className="text-white font-medium">
                    {isOpen ? "We're Open" : "We're Closed"}
                </p>

                <span className="w-px h-6 bg-white/20"></span>

                <p
                    className={`text-sm ${
                        isOpen ? "text-green-200" : "text-red-200"
                    }`}
                >
                    {isOpen ? "Come on in !" : "See you soon"}
                </p>

                <button
                    onClick={clickHandler}
                    className="ml-2 text-white/50 hover:text-white transition-colors"
                >
                    <FaTimes className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default ModalTImeShow;
