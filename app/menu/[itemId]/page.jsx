// app/menu/[itemId]/page.jsx
import { getItem } from "@/app/_lib/data-service";
import { notFound } from "next/navigation";
import Item from "@/app/_components/Item";

export default async function Page({ params }) {
    const { itemId } = await params;
    const id = Number(itemId);

    const item = await getItem(id);
    console.log("🔍 Page - item:", item);

    if (!item) {
        console.log("❌ Item not found, calling notFound()");
        notFound();
        return null;
    }

    return (
        <div className="max-w-6xl mx-auto mt-8 px-4">
            <Item item={item} />
        </div>
    );
}
