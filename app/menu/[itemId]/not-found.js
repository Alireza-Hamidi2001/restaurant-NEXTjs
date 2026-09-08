import GoBackButton from "@/app/_components/GoBackButton";
import {
    FaRegTimesCircle,
    FaSearch
} from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
            <div
                style={{
                    animationDuration: "1.5s",
                }}
                className="absolute animate-bounce bottom-25 w-24 h-24 bg-red-400/30 rounded-full"></div>
            <div
                style={{
                    animationDuration: "1.2s",
                }}
                className="absolute animate-bounce top-25 translate-x-16 w-32 h-32 bg-red-400/20 rounded-full"></div>

            {/* Main Content */}
            <div className="relative backdrop-blur-2xl z-10 max-w-4xl w-full text-center">
                {/* 404 Number */}
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-40 bg-linear-to-r from-transparent to-red-400"></div>

                    <h1 className="text-[15rem] md:text-[12rem]  text-transparent bg-clip-text bg-linear-to-r from-red-500 via-red-400 to-red-500 select-none">
                        404
                    </h1>

                    <div className="h-px w-40 bg-linear-to-l from-transparent to-red-400"></div>
                </div>

                {/* Error Message */}
                <div className="mb-8 relative">
                    <div className="bg-red-400/20 inline-block px-6 py-2 mb-4 rounded-full">
                        <span className="flex items-center gap-2 text-red-100 text-[1.2rem] font-medium tracking-wider">
                            <FaRegTimesCircle /> THIS Item NOT FOUND
                        </span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-10">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-linear-to-r  rounded-xl blur-lg transition-all duration-300 group-hover:blur-xl"></div>
                        <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-gray-600/50 rounded-xl overflow-hidden hover:border-amber-400/50 transition-all duration-300">
                            <input
                                type="text"
                                placeholder="Search for a dish..."
                                className="w-full px-6 py-3 bg-transparent text-white placeholder-gray-400 outline-none"
                            />
                            <button className="px-4 py-3 text-amber-400 hover:text-amber-300 transition-colors duration-300">
                                <FaSearch className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <GoBackButton />
            </div>
        </div>
    );
}
