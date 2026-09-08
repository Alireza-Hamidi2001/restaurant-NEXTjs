import about_image_1 from "@/public/about-1.jpg";
import Image from "next/image";
import { FaRecycle, FaRegHandshake } from "react-icons/fa6";
import { GiChefToque, GiJourney } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { IoHeart, IoStarSharp } from "react-icons/io5";
import { SiCodefresh } from "react-icons/si";
import { TfiThought } from "react-icons/tfi";

import Link from "next/link";
import Footer from "../_components/Footer";

export const metadata = {
    title: "About",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center">
                <div className="text-center px-4">
                    <div className="animate-fade-in flex items-center justify-center gap-2 md:gap-4">
                        <div className="h-px w-20 md:w-40  bg-linear-to-r from-transparent to-white"></div>
                        <h1 className="text-2xl md:text-6xl font-bold mb-4">
                            About Us
                        </h1>
                        <div className="h-px w-20 md:w-40 bg-linear-to-l from-transparent to-white"></div>
                    </div>
                    <p className="animate-fade-up text-white/50 text-sm md:text-2xl max-w-2xl mx-auto">
                        Where Persian Tradition Meets International Flavors
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="animate-fade-up-2 max-w-6xl mx-auto px-4  pb-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Our Story
                        </h2>
                        <p className="text-white/50 leading-relaxed mb-4">
                            Founded in 2018,{" "}
                            <strong>Persian Bites & Beyond</strong> was born
                            from a simple dream: to bring the rich, aromatic
                            flavors of Persian cuisine to the world while
                            celebrating the best of international gastronomy.
                        </p>
                        <p className="text-white/50 leading-relaxed mb-4">
                            Our journey began in the heart of Tehran, where Chef
                            Alireza grew up surrounded by the scent of saffron,
                            dried limes, and slow-cooked stews. After training
                            in Paris and working in Michelin-starred kitchens
                            across Europe, he returned home with a vision: to
                            create a dining experience that honors Persian
                            culinary heritage while embracing global techniques
                            and ingredients.
                        </p>
                        <p className="text-white/50 leading-relaxed">
                            Today, our restaurant is a melting pot of flavors,
                            where the ancient recipes of Persia meet the
                            sophistication of French cuisine, the freshness of
                            Mediterranean cooking, and the boldness of Asian
                            spices.
                        </p>
                    </div>
                    <div className="relative bg-amber-100 h-80 rounded-2xl flex items-center justify-center">
                        <Image
                            alt="first about image"
                            src={about_image_1}
                            fill
                        />
                    </div>
                </div>
            </section>

            {/* Our Philosophy */}
            <section className="group bg-gray-900/20 rounded-3xl border border-gray-900 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="flex items-center justify-center gap-4 text-3xl font-bold text-center text-white mb-12">
                        <TfiThought className="h-15 w-15 transition-opacity duration-300 animate-bounce" />{" "}
                        Our Philosophy
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="mb-4">
                                <SiCodefresh className="mx-auto w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-semibold text-white/75 mb-2">
                                Fresh Ingredients
                            </h3>
                            <p className="text-white/50">
                                We source our produce daily from local farms and
                                import authentic Persian spices like saffron,
                                sumac, and advieh directly from Iran.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="mb-4">
                                <GiChefToque className="mx-auto w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-semibold text-white/75 mb-2">
                                Artisanal Craft
                            </h3>
                            <p className="text-white/50">
                                Every dish is handcrafted with precision—from
                                slow-cooking our lamb shanks for 8 hours to
                                baking our Persian flatbreads in a traditional
                                clay oven.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="mb-4">
                                <FaRegHandshake className="mx-auto w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-semibold text-white/75 mb-2">
                                Warm Hospitality
                            </h3>
                            <p className="text-white/50">
                                Inspired by Persian &quot; Taarof &quot; (the
                                art of hospitality), we treat every guest like
                                family, ensuring a memorable and welcoming
                                experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Highlights */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="flex justify-center items-center gap-4 text-3xl font-bold text-center text-white mb-12">
                        <GiJourney className="h-15 w-15 transition-opacity duration-300 animate-bounce" />
                        A Culinary Journey
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="rounded-xl shadow-lg overflow-hidden">
                            <div className="relative h-48 flex items-center justify-center text-white text-2xl font-bold">
                                <Image
                                    src="https://vguofujpmfrcypnkptnx.supabase.co/storage/v1/object/public/about-section/persian.png"
                                    alt="persian section about image"
                                    fill
                                    // placeholder="blur"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <ul className="space-y-2 text-white/50">
                                    <li>• Ghormeh Sabzi (Herb Stew)</li>
                                    <li>• Zereshk Polo (Barberry Rice)</li>
                                    <li>
                                        • Fesenjan (Pomegranate Walnut Stew)
                                    </li>
                                    <li>• Koobideh Kebab</li>
                                    <li>• Tahdig (Crispy Rice)</li>
                                </ul>
                            </div>
                        </div>

                        <div className=" rounded-xl shadow-lg overflow-hidden">
                            <div className="relative h-48 flex items-center justify-center text-white text-2xl font-bold">
                                <Image
                                    src="https://vguofujpmfrcypnkptnx.supabase.co/storage/v1/object/public/about-section/international.png"
                                    alt="international section about image"
                                    fill
                                    // placeholder="blur"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <ul className="space-y-2 text-white/50">
                                    <li>• Grilled Ribeye Steak</li>
                                    <li>• Mediterranean Salmon</li>
                                    <li>• Truffle Pasta</li>
                                    <li>• Moroccan Lamb Tagine</li>
                                    <li>• Thai Green Curry</li>
                                </ul>
                            </div>
                        </div>

                        <div className=" rounded-xl shadow-lg overflow-hidden">
                            <div className="relative h-48 flex items-center justify-center text-white text-2xl font-bold">
                                <Image
                                    src="https://vguofujpmfrcypnkptnx.supabase.co/storage/v1/object/public/about-section/ice_cream.png"
                                    alt="ice cream section about image"
                                    fill
                                    // placeholder="blur"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <ul className="space-y-2 text-white/50">
                                    <li>
                                        • Persian Faloodeh (Rosewater Sorbet)
                                    </li>
                                    <li>• Baklava Cheesecake</li>
                                    <li>• Saffron Ice Cream</li>
                                    <li>• Traditional Persian Tea</li>
                                    <li>• Signature Mocktails</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Chef */}
            <section className="bg-gray-900/20 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-120 rounded-2xl flex items-center justify-center">
                            <Image
                                alt="first about image"
                                src="https://vguofujpmfrcypnkptnx.supabase.co/storage/v1/object/public/about-section/chef.png"
                                className="object-cover object-top"
                                fill
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Meet Our Head Chef
                            </h2>
                            <h3 className="flex items-center gap-2 text-xl text-amber-600 font-semibold mb-3">
                                <GiChefToque className="h-10 w-10" /> Chef
                                Alireza Hamidi
                            </h3>
                            <p className="text-white/50 leading-relaxed mb-3">
                                With over 20 years of culinary experience across
                                three continents, Chef Hamidi brings a unique
                                fusion of Persian tradition and global
                                innovation to every plate.
                            </p>
                            <p className="text-white/50 leading-relaxed mb-3">
                                A graduate of Le Cordon Bleu Paris, he has
                                worked in award-winning restaurants in London,
                                Dubai, and Istanbul. His passion lies in
                                reimagining ancient Persian recipes with modern
                                techniques while staying true to their authentic
                                soul.
                            </p>
                            <p className="text-white/50 leading-relaxed">
                                &quot;Cooking is not just about food—it&apos;s
                                about storytelling, culture, and bringing people
                                together,&quot; says Chef Ahmad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="group">
                            <div className="mb-2">
                                <ImPower className="group-hover:rotate-[-15deg] group-hover:text-emerald-500 group-hover:scale-120 transition-all duration-300 w-9 h-9 mx-auto" />
                            </div>
                            <h1 className="font-semibold text-white">
                                Quality
                            </h1>
                            <p className="text-lg text-white/50">
                                Premium ingredients only
                            </p>
                        </div>
                        <div className="group">
                            <div className="mb-2">
                                <FaRecycle className="group-hover:rotate-[-15deg] group-hover:text-slate-500 group-hover:scale-120 transition-all duration-300 w-9 h-9 mx-auto" />
                            </div>
                            <h1 className="font-semibold text-white">
                                Sustainability
                            </h1>
                            <p className="text-lg text-white/50">
                                Eco-friendly practices
                            </p>
                        </div>
                        <div className="group">
                            <div className="mb-2">
                                <IoHeart className="group-hover:rotate-[-15deg] group-hover:text-red-500 group-hover:scale-120 transition-all duration-300 w-9 h-9 mx-auto" />
                            </div>
                            <h1 className="font-semibold text-white">
                                Passion
                            </h1>
                            <p className="text-lg text-white/50">
                                Cooked with love
                            </p>
                        </div>
                        <div className="group">
                            <div className="mb-2">
                                <IoStarSharp className="group-hover:rotate-[-15deg] group-hover:text-amber-500 group-hover:scale-120 transition-all duration-300 w-9 h-9 mx-auto" />
                            </div>
                            <h1 className="font-semibold text-white">
                                Excellence
                            </h1>
                            <p className="text-lg text-white/50">
                                Unforgettable dining
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-900/20 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">
                        Join Us for an Unforgettable Meal
                    </h2>
                    <p className="text-xl mb-8 text-white/50">
                        Whether you&apos;re craving authentic Persian kebabs or
                        international gourmet, we promise a dining experience
                        you&apos;ll never forget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/menu"
                            className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition"
                        >
                            View Our Menu
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-700 transition"
                        >
                            Book a Table
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
