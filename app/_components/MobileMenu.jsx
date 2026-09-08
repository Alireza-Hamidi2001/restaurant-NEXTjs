"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiLogIn } from "react-icons/fi";
import { usePathname } from "next/navigation";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    const menu_items = [
        { id: 1, name: "Menu", link: "/menu" },
        { id: 2, name: "Blog", link: "/blog" },
        { id: 3, name: "About Us", link: "/about" },
        { id: 4, name: "Contact", link: "/contact" },
    ];

    // preventing scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden cursor-pointer text-2xl"
                aria-label="Open menu"
            >
                <FiMenu />
            </button>

            {/* Full Screen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/20 h-screen backdrop-blur-[10px] md:hidden">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-5 right-5 z-10 cursor-pointer text-3xl text-white"
                        aria-label="Close menu"
                    >
                        <FiX />
                    </button>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <ul className="flex flex-col items-center gap-2">
                            {menu_items.map((menu_item) => (
                                <li key={menu_item.id}>
                                    <Link
                                        href={menu_item.link}
                                        onClick={() => setIsOpen(false)}
                                        className={`block text-[1.8rem] rounded-4xl px-8 py-3 transition-all duration-200 hover:bg-white/20 ${
                                            pathName === menu_item.link
                                                ? "bg-white/30"
                                                : ""
                                        }`}
                                    >
                                        {menu_item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Login */}
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="mt-8 flex items-center gap-2 rounded-4xl px-8 py-3 text-[2.5rem] transition-all duration-200 hover:bg-white/20"
                        >
                            <FiLogIn />
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default MobileMenu;
