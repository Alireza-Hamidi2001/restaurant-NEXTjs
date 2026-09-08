"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
    const pathName = usePathname();

    const menu_items = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Menu", link: "/menu" },
        { id: 3, name: "About Us", link: "/about" },
        { id: 4, name: "Contact", link: "/contact" },
    ];
    return (
        <ul className="flex items-center">
            {menu_items.map((menu_item) => (
                <Link
                    key={menu_item.id}
                    href={menu_item.link}
                >
                    <li
                        className={`cursor-pointer px-4 py-2 hover:bg-gray-600/40 transition-all duration-200 rounded-4xl ${
                            pathName === menu_item.link ? "bg-white/30" : ""
                        }`}
                    >
                        {menu_item.name}
                    </li>
                </Link>
            ))}
        </ul>
    );
}

export default Navigation;
