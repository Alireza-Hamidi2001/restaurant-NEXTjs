"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FaBowlRice } from "react-icons/fa6";
import { LuSalad } from "react-icons/lu";
import { PiHamburgerBold } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const activeFilter = searchParams.get("category") ?? "all";

    function handleFilter(filter) {
        // console.log(filter);
        const params = new URLSearchParams(searchParams);
        params.set("category", filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    return (
        <div className="rounded-full flex gap-1 md:gap-2">
            <Button
                filter="All"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                &bull; All
            </Button>
            <Button
                filter="Burgers"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                <PiHamburgerBold /> Burgers
            </Button>
            <Button
                filter="Persian"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                <FaBowlRice /> Persian
            </Button>
            <Button
                filter="Salad"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                <LuSalad /> Salad
            </Button>
            <Button
                filter="Drinks"
                handleFilter={handleFilter}
                activeFilter={activeFilter}
            >
                <RiDrinks2Fill />
                Drinks
            </Button>
        </div>
    );
}

function Button({ filter, handleFilter, activeFilter, children }) {
    return (
        <button
            onClick={() => handleFilter(filter)}
            className={`flex items-center gap-1 hover:bg-red-700/40 px-2 py-1 md:px-5 md:py-2 hover:bg-primary-700 cursor-pointer transition-all duration-300 rounded-full ${
                filter === activeFilter
                    ? " bg-red-600/60 border border-red-400 hover:bg-red-600/60 text-[0.7rem] md:text-[1rem]"
                    : "bg-red-100/5 text-[0.7rem] md:text-[1rem]"
            } `}
        >
            {children}
        </button>
    );
}

export default Filter;
