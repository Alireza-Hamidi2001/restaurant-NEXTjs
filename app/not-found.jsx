// root - not-found.js
import {
    FaRegTimesCircle
} from "react-icons/fa";
import GoBackButton from "./_components/GoBackButton";

export default function NotFound() {
    return (
        <div className="relative bg-black/10 backdrop-blur-xl min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
            <div
                style={{
                    animationDuration: "1.5s",
                }}
                className="absolute animate-bounce bottom-25 w-24 h-24 bg-red-400/20 rounded-full"
            ></div>
            <div
                style={{
                    animationDuration: "1.2s",
                }}
                className="absolute animate-bounce top-25 translate-x-16 w-32 h-32 bg-red-400/10 rounded-full"
            ></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl w-full text-center">
                {/* 404 Number */}
                <div className="flex items-center justify-center gap-2 md:gap-4">
                    <div className="h-px w-20 md:w-40 bg-linear-to-r from-transparent to-red-400"></div>

                    <h1 className="text-[5rem] md:text-[7rem]  text-transparent bg-clip-text bg-linear-to-r from-red-500 via-red-400 to-red-500 select-none">
                        404
                    </h1>

                    <div className="h-px w-20 md:w-40 bg-linear-to-l from-transparent to-red-400"></div>
                </div>

                {/* Error Message */}
                <div className="mb-8 relative">
                    <div className="bg-red-400/20 inline-block px-6 py-2 mb-4 rounded-full">
                        <span className="flex items-center gap-2 text-red-100 text-[0.8rem] md:text-[1.2rem] font-medium tracking-wider">
                            <FaRegTimesCircle /> THIS PAGE NOT FOUND
                        </span>
                    </div>
                </div>

                {/* Action Buttons */}
                <GoBackButton />
            </div>
        </div>
    );
}
