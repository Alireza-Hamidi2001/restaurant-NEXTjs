import supabase from "./supabase";

function parseIngredients(ingredientString) {
    if (!ingredientString) return [];

    if (Array.isArray(ingredientString)) return ingredientString;

    const items = ingredientString
        .replace(/^Toppings:\s*/, "")
        .split(",")
        .map((item) => item.trim());

    const colors = [
        "#FFDD33",
        "#FF6666",
        "#66FF82",
        "#99C2FF",
        "#FFEAA7",
        "#FF7433",
        "#FF0000",
        "#709900",
        "#CCAA00",
        "#D6FF66",
    ];

    return items.map((name, index) => ({
        name: name,
        color: colors[index % colors.length],
    }));
}

export async function getItems() {
    try {
        const { data: items, error } = await supabase.from("items").select("*");

        if (error) throw error;

        if (!items || items.length === 0) return [];
        return items.map((item) => ({
            ...item,
            ingredients: parseIngredients(item.ingredients),
        }));
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
}

export async function getItem(id) {
    try {
        const { data, error } = await supabase
            .from("items")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;

        if (!data) return null;
        return {
            ...data,
            ingredients: parseIngredients(data.ingredients),
        };
    } catch (error) {
        console.error("Error fetching item:", error);
        return null;
    }
}

