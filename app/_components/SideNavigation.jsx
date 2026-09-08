"use client";

import { GoHome } from "react-icons/go";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoDocumentTextOutline } from "react-icons/io5";

const navLinks = [
    {
        name: "Home",
        href: "/profile",
        icon: <GoHome className="h-5 w-5 text-primary-600" />,
    },
    {
        name: "Orders",
        href: "/profile/orders",
        icon: <IoDocumentTextOutline className="h-5 w-5 text-primary-600" />,
    },
];

function SideNavigation() {
    const pathName = usePathname();
    // console.log(pathName);
    return (
        <nav className="mt-15 pt-10 border-r border-white/5">
            <ul className="flex flex-col h-full text-[0.9rem]">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            className={`py-3 px-3 md:px-5 hover:bg-white/3  transition-colors flex items-center gap-2  text-primary-200 ${
                                pathName === link.href
                                    ? "bg-white/5 text-white"
                                    : "text-white/40"
                            }`}
                            href={link.href}
                        >
                            {link.icon}
                            <span className="hidden md:block">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SideNavigation;
