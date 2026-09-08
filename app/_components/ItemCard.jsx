import image_demo from "@/public/3.png";
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaLeaf, FaWheatAwn } from "react-icons/fa6";
import { VscErrorCompact } from "react-icons/vsc"; // ✅ اضافه شد
import { betania, dekko } from "../layout";
import { getItems } from "../_lib/data-service";
import { FaLongArrowAltRight } from "react-icons/fa";

export default async function ItemCard({ filter = "all" }) {
    const items = await getItems();
    console.log("*********** ITEMS ***********", items);

    let displayedItems;
    if (filter === "All") {
        displayedItems = items;
    } else if (filter === "Burgers") {
        displayedItems =
            items?.filter((item) => item.category === "burger") || [];
    } else if (filter === "Persian") {
        displayedItems =
            items?.filter((item) => item.category === "persian") || [];
    } else if (filter === "Salad") {
        displayedItems =
            items?.filter((item) => item.category === "salad") || [];
    } else if (filter === "Drinks") {
        displayedItems =
            items?.filter((item) => item.category === "drink") || [];
    } else {
        displayedItems = items || [];
    }

    const messages = {
        All: "Sorry we are working on our menu. There is no item available at the moment.",
        Burgers: "Sorry we don't have Burger food right now.",
        Persian: "Sorry we don't have Persian food right now.",
        Salad: "Sorry we don't have Salad right now.",
        Drinks: "Sorry we don't have Drinks right now.",
    };

    if (!displayedItems || displayedItems.length === 0) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-12 text-center">
                <div className="text-center p-6 bg-red-800/20 border border-red-800/40 rounded-lg">
                    <p className="text-red-400 mx-auto flex gap-4 items-center justify-center">
                        <VscErrorCompact className="h-6 w-6" />
                        {messages[filter] || "No items found"} Please change
                        your filter option.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedItems.map((item) => (
                    <Link
                        key={item.id}
                        href={`/menu/${item.id}`}
                    >
                        <div className="relative rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_1rem] hover:shadow-gray-600/40 cursor-pointer group h-full flex flex-col">
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden flex-shrink-0">
                                <Image
                                    src={item.image || image_demo}
                                    alt={item.name || "Menu item"}
                                    fill
                                    className="object-cover"
                                />
                                {/* Badges */}
                                <div className="absolute top-3 right-3 flex gap-2 flex-wrap">
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
                                            <FaWheatAwn className="w-3 h-3" />{" "}
                                            GF
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex flex-col justify-between items-start mb-2 relative">
                                    <h3 className="text-[1.5rem] leading-6 mb-4 font-semibold text-white mb-2 transition">
                                        &bull; {item.name}
                                    </h3>
                                    <span
                                        className={`${betania.className} bg-amber-200/30 rounded-full px-2 py-1 z-50 text-amber-300 font-bold text-[1.4rem]`}
                                    >
                                        {item.currency || "$"}
                                        {item.price?.toFixed(2) || "0.00"}
                                    </span>
                                </div>
                                <p className="text-white/40 text-[1rem] line-clamp-2 mb-3 flex-grow">
                                    {item.slug}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {item.ingredients
                                        ?.slice(0, 4)
                                        .map((ingredient, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    color:
                                                        ingredient.color ||
                                                        "#FFD700",
                                                    border: `1px solid ${
                                                        ingredient.color ||
                                                        "#FFD700"
                                                    }`,
                                                }}
                                                className="text-xs text-black px-2 py-1 rounded-[3px]"
                                            >
                                                {ingredient.name}
                                            </span>
                                        ))}
                                    {item.ingredients?.length > 4 && (
                                        <span className="text-xs text-white/60 bg-gray-800/80 px-2 py-1 rounded-full">
                                            +{item.ingredients.length - 4}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-4 text-amber-400/50 text-sm flex items-center gap-1 group-hover:text-amber-400 transition">
                                    View Details <FaLongArrowAltRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
