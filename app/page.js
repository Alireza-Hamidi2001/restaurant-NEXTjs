import exploded from "@/public/exploded.png";
import hero_image from "@/public/hero.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const badges = [
    { id: 1, name: "Authentic", color: "#33FFEE" }, // زرد طلایی
    { id: 2, name: "Fresh", color: "#FDB813" }, // زرد روشن
    { id: 3, name: "Artisan", color: "#FF3333" }, // زرد کهربایی
    { id: 4, name: "Premium", color: "#66FF82" }, // زرد کهربایی
    { id: 5, name: "Halal", color: "#E6E6E6" }, // زرد طلایی
    { id: 6, name: "Organic", color: "#3347FF" }, // زرد سافران
    { id: 7, name: "Flavorful", color: "#FF7433" }, // زرد عسلی
];

function page() {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={hero_image}
                        alt="Persian Restaurant"
                        fill
                        className="object-cover opacity-50 grayscale-100"
                        priority
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="md:fixed p-4 md:p-0 z-10 bottom-10 left-10">
                    {/* Star Rating */}
                    <div className="animate-fade-left flex justify-start gap-1 mb-8 text-amber-400">
                        <FaStar className="w-6 h-6" />
                        <FaStar className="w-6 h-6" />
                        <FaStar className="w-6 h-6" />
                        <FaStar className="w-6 h-6" />
                        <FaStar className="w-6 h-6" />
                    </div>

                    {/* Restaurant Name */}
                    <h1 className="animate-fade-in text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
                        Persian Bites
                    </h1>

                    {/* Tagline */}
                    <p className="animate-fade-up tracking-[3px] text-[0.8rem] md:text-[1rem] text-amber-400/80 mb-6 max-w-2xl mx-auto">
                        Where tradition meets taste
                    </p>

                    {/* Description */}
                    <p className="animate-fade-right text-white/60 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                        Authentic{" "}
                        <span className="text-white font-bold">Persian</span>{" "}
                        flavors crafted with{" "}
                        <span className="text-white font-bold">passion</span>. A
                        culinary journey through ancient recipes and modern
                        elegance.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/menu"
                        className="animate-fade-down inline-block bg-amber-600 hover:bg-amber-500 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-600/30 text-lg">
                        Explore Our Menu
                    </Link>
                </div>
                <div
                    className="hidden md:block animate-scale-in fixed bottom-[45%] z-10 md:bottom-[50%] md:translate-y-[50%] md:right-20 px-4 rounded-xl md:min-h-[20rem]
                    w-[20rem] md:w-[25rem] border border-gray-500 backdrop-blur-[5px]">
                    <div className="relative top-0 z-20 h-[10rem] md:h-[11rem] translate-y-[-2rem] md:translate-y-[-5rem]">
                        <Image
                            className="object-cover"
                            fill
                            alt="demo"
                            src={exploded}
                        />
                    </div>
                    <div className="flex gap-2 flex-wrap my-4 translate-y-[-2rem]">
                        <p className="text-[0.8rem] leading-4 hidden md:block">
                            At Persian Bites, we take pride in serving only the
                            Authentic flavors of Persian cuisine. Every dish is
                            made with Fresh, high-quality ingredients, carefully
                            selected to create a memorable dining experience.
                            Our chefs are true Artisan craftspeople, using
                            traditional methods passed down through generations.
                        </p>
                        {badges.map((badge) => (
                            <p
                                key={badge.id}
                                style={{ backgroundColor: badge.color }}
                                className="px-2 text-[0.8rem] rounded-full w-fit text-black">
                                {badge.name}
                            </p>
                        ))}
                    </div>
                    <Link
                        href="/about"
                        className="mb-4 inline-block bg-amber-600 hover:bg-amber-500 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-600/30 text-[1rem]">
                        More details &rarr;
                    </Link>{" "}
                </div>
            </section>
        </div>
    );
}

export default page;
