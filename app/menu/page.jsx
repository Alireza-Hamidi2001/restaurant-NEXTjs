// app/menu/page.jsx

import { Suspense } from "react";
import Filter from "../_components/Filter";
import ItemCard from "../_components/ItemCard";
import Spinner from "../_components/Spinner";
import Footer from "../_components/Footer";

export const metadata = {
    title: "Menu",
};

async function page({ searchParams }) {
    const { category } = await searchParams;
    const filter = category ?? "all";
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center">
                <div className="text-center px-4">
                    <div className="animate-fade-in flex items-center justify-center gap-2 md:gap-4">
                        <div className="h-px w-20 md:w-40  bg-linear-to-r from-transparent to-white"></div>
                        <h1 className="text-2xl md:text-6xl font-bold mb-4">
                            Menu
                        </h1>
                        <div className="h-px w-20 md:w-40 bg-linear-to-l from-transparent to-white"></div>
                    </div>
                    <p className="animate-fade-up text-white/50 text-sm md:text-2xl max-w-2xl mx-auto">
                        Embark on a Culinary Journey Through Persia and Beyond,
                        Where the Rich, Aromatic Flavors of Ancient Persian
                        Cuisine Meet the Bold, Diverse Tastes of International
                        Gastronomy{" "}
                    </p>
                </div>
            </section>
            <div className="animate-fade-in-2 flex justify-center mb-2">
                <Filter />
            </div>
            <Suspense fallback={<Spinner />}>
                <ItemCard filter={filter} />
            </Suspense>
            <Footer />
        </div>
    );
}

export default page;
