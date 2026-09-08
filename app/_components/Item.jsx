// app/_components/Item.jsx
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaLeaf, FaWheatAwn, FaArrowLeft } from "react-icons/fa6";
import { betania } from "../layout";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { auth } from "../_lib/auth";
import Footer from "./Footer";

export default async function Item({ item }) {
    const session = await auth();
    if (!item) {
        return (
            <div className="text-center py-12">
                <p className="text-white/60 text-lg">Item not found</p>
                <Link
                    href="/menu"
                    className="text-amber-400 hover:text-amber-300 mt-4 inline-block"
                >
                    ← Back to Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="relative mt-[3.75rem] overflow-hidden">
            <div className="absolute w-24 h-24 bg-white/20 rounded-full animate-bounce left-[80%] top-[20%] translate-x-[-50%] translate-y-[-50%]"></div>
            {/* Back Button */}
            <div className="">
                <Link
                    href="/menu"
                    className="group relative inline-flex items-center gap-2 px-5 py-4 bg-transparent text-white/50 tracking-wider rounded-xl hover:text-white transition-all duration-300"
                >
                    <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span>Back to Menu</span>
                </Link>
            </div>

            <div className="grid items-center md:grid-cols-2 gap-8 p-2 md:p-6">
                {/* Image */}
                <div className="relative h-[300px] rounded-2xl overflow-hidden">
                    <Image
                        src={item.image || "/images/default-item.jpg"}
                        alt={item.name || "Menu item"}
                        fill
                        className="object-cover"
                    />
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {item.isVegetarian && (
                            <span className="bg-green-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                                <FaLeaf className="w-3 h-3" /> Veg
                            </span>
                        )}
                        {item.isSpicy && (
                            <span className="bg-red-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                                <FaFire className="w-3 h-3" /> Spicy
                            </span>
                        )}
                        {item.isGlutenFree && (
                            <span className="bg-blue-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                                <FaWheatAwn className="w-3 h-3" /> GF
                            </span>
                        )}
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col">
                    <h1 className="md:-translate-x-24 rounded-[4px] text-5xl md:text-6xl bg-white/10 backdrop-blur-[7px] p-3 md:p-6 font-bold text-white mb-4">
                        {item.name}
                    </h1>

                    <span
                        className={`${betania.className} text-amber-200 font-bold text-6xl my-4`}
                    >
                        {item.currency || "$"}
                        {item.price?.toFixed(2) || "0.00"}
                    </span>

                    {item.slug && (
                        <p className="text-white text-lg my-3">
                            <p className="text-white/50 text-sm">Known as:</p>
                            &bull; {item.slug || ""}
                        </p>
                    )}

                    {/* Category */}
                    {item.category && (
                        <div className="flex items-center mb-4">
                            <span className="flex items-center gap-1 text-[1rem] text-white/40">
                                <BiSolidCategoryAlt /> Category -&nbsp;
                            </span>
                            <span className="text-white/80 text-[1.2rem] font-medium capitalize">
                                {item.category}
                            </span>
                        </div>
                    )}

                    {/* Ingredients */}
                    {item.ingredients && item.ingredients.length > 0 && (
                        <div className="mb-6">
                            <h3 className="flex items-center gap-1 text-[1rem] text-white/40  mb-2">
                                <IoFastFood /> Ingredients
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {item.ingredients.map((ingredient, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            border: `1px solid ${ingredient.color}`,
                                            color:
                                                ingredient.color || "#FFD700",
                                        }}
                                        className="text-xs text-black px-3 py-1.5 rounded-[3px] font-medium"
                                    >
                                        {ingredient.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    {!session?.user ? (
                        <div className="mt-auto grid grid-cols-1 gap-4">
                            <Link
                                href="/profile"
                                className="flex-1 text-center px-8 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white text-[1.4rem] py-1 rounded-[5px] hover:shadow-lg shadow-md capitalize shadow-teal-400/40 transition-all duration-300 "
                            >
                                Login first
                            </Link>
                        </div>
                    ) : (
                        <div className="mt-auto grid grid-cols-[2fr_1fr] gap-4">
                            <button className="flex-1 text-center px-8 bg-teal-700 hover:bg-teal-800 cursor-pointer text-white text-[1.4rem] py-1 rounded-[5px] hover:shadow-lg shadow-md shadow-teal-400/40 transition-all duration-300 ">
                                Order Now
                            </button>
                            <button className="flex-1 text-center px-8 border border-teal-600 text-teal-600 hover:text-teal-500 hover:border-teal-500 cursor-pointer text-[1.4rem] py-1 rounded-[5px] transition-all duration-300">
                                Save
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
