import Image from "next/image";
import image from "@/public/3.png";

function page() {
    // change later
    const orders = [
        {
            id: 1,
            image: image,
            name: "burger",
            status: "in progress",
            date: "20/06/2026",
            price: 20,
        },
    ];
    if (!orders.length)
        return (
            <p className="bg-red-400/5 text-red-500">
                You do not have any orders yet
            </p>
        );
    return (
        <div className="p-16 relative h-[calc(100vh-3.75rem)] mt-15">
            {/* ///////-------------////// */}
            {orders.map((order) => (
                <div className="grid gap-4 border border-white/10 rounded-md p-4">
                    <div className="flex gap-2">
                        <p className="bg-orange-300/40 px-4 py-1 rounded-full text-[0.7rem]">
                            {order.status}
                        </p>{" "}
                        | <span className="text-white/50"> {order.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative h-25 w-25">
                            <Image
                                fill
                                src={order.image}
                                alt={order.name}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p>{order.name}</p>
                            <p>{order.name}</p>
                            <p className="text-white/50">$ {order.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default page;
