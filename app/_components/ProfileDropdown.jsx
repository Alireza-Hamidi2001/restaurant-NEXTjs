"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTimesCircle, FaUser, FaUserCircle } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {
    MdEmail,
    MdOutlineQuestionMark,
    MdRestaurantMenu,
} from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { sighnOutAction } from "../_lib/action";

function ProfileDropdown({ session }) {
    const [dropdownShow, setDropdownShow] = useState(false);
    
    function handleDropdownHandler() {
        setDropdownShow((prev) => !prev);
    }
    // console.log(session);

    return (
        <>
            <li
                onClick={handleDropdownHandler}
                className="flex items-center gap-2 cursor-pointer"
            >
                <div className="relative h-10 w-10 rounded-full">
                    {session?.user.image ? (
                        <Image
                            fill
                            src={session?.user.image}
                            alt={`${session?.user.name} image avatar`}
                            className="object-cover rounded-full"
                            referrerPolicy="no-referrer"
                        />
                    ) : (
                        <p className="w-full rounded-full h-full border border-white/80 flex items-center justify-center text-white text-xl font-bold">
                            {session?.user.name?.charAt(0) || "?"}
                        </p>
                    )}
                </div>
            </li>
            {dropdownShow && (
                <div className="absolute right-0 top-8 w-auto translate-y-4 rounded-[5px] backdrop-blur-2xl shadow-[0_0_10px] shadow-white">
                    <FaTimesCircle
                        onClick={handleDropdownHandler}
                        className="absolute z-50 text-red-400 w-6 h-6 right-2 top-2 hover:scale-110 transition-all duration-300 cursor-pointer"
                    />
                    <ul>
                        <p className="text-[0.6rem] px-2 pt-1 text-white/40 tracking-[2px]">
                            ACCOUNT
                        </p>

                        <li className="flex items-center gap-2 py-2 px-4  border-b border-white/20">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                {session?.user.image ? (
                                    <Image
                                        fill
                                        src={session?.user.image}
                                        alt={`${session?.user.name} image avatar`}
                                        className="object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-xl font-bold">
                                        {session?.user.name?.charAt(0) || "?"}
                                    </div>
                                )}
                            </div>
                            <div className="leading-5">
                                <p className="flex items-center gap-1 text-white text-[1.2rem]">
                                    <FaUser className="w-3 h-3" />{" "}
                                    {session?.user.name}
                                </p>
                                <p className="flex items-center gap-1 text-white/50 text-[0.9rem]">
                                    <MdEmail className="w-3 h-3" />
                                    {session?.user.email}
                                </p>
                            </div>
                        </li>
                        <p className="text-[0.6rem] px-2 pt-1 text-white/40 tracking-[2px]">
                            GENERAL
                        </p>
                        <div className="py-3 border-b border-white/20">
                            <Link href="/profile">
                                <li className="flex items-center gap-2 py-1 px-4 text-[0.9rem] cursor-pointer transition-all duration-300 hover:bg-white/20">
                                    <FaUserCircle className="w-5 h-5" /> My
                                    profile
                                </li>
                            </Link>
                            <li className="flex items-center gap-2 py-1 px-4 text-[0.9rem] cursor-pointer transition-all duration-300 hover:bg-white/20">
                                <IoIosHelpCircleOutline className="w-5 h-5" />{" "}
                                Help center
                            </li>
                        </div>
                        <p className="text-[0.6rem] px-2 pt-1 text-white/40 tracking-[2px]">
                            MENU
                        </p>
                        <div className="py-3 border-b border-white/20">
                            <Link href="/menu">
                                <li className="flex items-center gap-2 py-1 px-4 text-[0.9rem] cursor-pointer transition-all duration-300 hover:bg-white/20">
                                    <MdRestaurantMenu className="w-5 h-5" />{" "}
                                    Menu
                                </li>
                            </Link>
                            <Link href="/about">
                                <li className="flex items-center gap-2 py-1 px-4 text-[0.9rem] cursor-pointer transition-all duration-300 hover:bg-white/20">
                                    <MdOutlineQuestionMark className="w-5 h-5" />{" "}
                                    About us
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="flex items-center gap-2 py-1 px-4 text-[0.9rem] cursor-pointer transition-all duration-300 hover:bg-white/20">
                                    <RiContactsFill className="w-5 h-5" />{" "}
                                    Contact
                                </li>
                            </Link>
                        </div>
                        <p className="text-[0.6rem] px-2 pt-1 text-white/40 tracking-[2px]">
                            CONTROLS
                        </p>

                        <form action={sighnOutAction}>
                            <button className="flex items-center gap-2 py-4 px-4 text-[1rem] cursor-pointer transition-all duration-300 hover:text-red-400 tracking-wider text-red-400/80">
                                <PiSignOutBold className="w-7 h-7" /> Sign out
                            </button>
                        </form>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileDropdown;
