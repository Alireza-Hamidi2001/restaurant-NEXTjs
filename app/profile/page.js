import Image from "next/image";
import { FaBookmark, FaUser } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { auth } from "../_lib/auth";
import user_avatar from "@/public/user.png";

async function page() {
    const session = await auth();
    const avatar = session?.user.image || user_avatar;

    return (
        <div className="flex flex-col gap-4 items-center md:grid md:grid-cols-[auto_1fr] md:items-start p-2 pt-16 md:p-16 relative h-[calc(100vh-3.75rem)] mt-15">
            <div className="absolute rounded-xl top-4 left-4 w-32 h-32 bg-white/10"></div>
            <div className="absolute rounded-full top-32 left-32 w-32 h-32 bg-white/8"></div>
            <div className="absolute rounded-xl bottom-4 left-4 w-24 h-24 bg-white/7"></div>
            <div className="absolute rounded-3xl bottom-4 right-4 w-24 h-24 bg-white/6"></div>
            <div className="absolute rounded-lg bottom-32 right-32 w-48 h-48 bg-white/5"></div>
            <div className="absolute rounded-full right-0 w-24 h-24 bg-white/4"></div>
            <div className="absolute rounded-5xl right-[60%] bottom-[50%] translate-x-[50%] translate-y-[50%] w-64 h-64 bg-white/5"></div>
            <div className="absolute rounded-full left-[50%] top-[50%] -translate-[50%_50%]  w-48 h-48 bg-white/2"></div>
            <div className="absolute rounded-full right-[50%] bottpm-[50%] w-48 h-48 bg-white/10"></div>

            <div className="flex flex-col max-w-fit backdrop-blur-[6px] border border-white/20 rounded-lg px-4">
                <div className=" mx-auto absolute translate-x-[-50%] left-[50%] top-[-20%] h-24 w-24">
                    {session?.user.image ? (
                        <Image
                            fill
                            src={session?.user.image}
                            alt={`${session?.user.name} image avatar`}
                            className="object-cover rounded-full"
                            referrerPolicy="no-referrer"
                        />
                    ) : (
                        <p className="w-full rounded-full h-full border border-white/80 flex items-center justify-center text-6xl bg-white text-black font-bold">
                            {session?.user.name?.charAt(0) || "?"}
                        </p>
                    )}
                </div>
                <div className="mt-16 mb-4">
                    <p className="flex items-center gap-2 text-[1.4rem]">
                        <FaUser /> {session?.user.name}
                    </p>
                    <p className="flex items-center gap-1 text-white/50 text-[1rem] tracking-wide">
                        <MdEmail /> {session?.user.email}
                    </p>
                    <div className="grid gap-2 grid-cols-2 my-4">
                        <div className="bg-white/10 p-2">
                            <p className="flex items-center justify-center gap-1">
                                <IoHeart /> 49
                            </p>
                        </div>
                        <div className="bg-white/10 p-2">
                            <p className="flex items-center justify-center gap-1">
                                <FaBookmark /> 2
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex backdrop-blur-[6px] border border-white/20 rounded-lg px-4 py-2">
                Welcome,<span className="font-extrabold ">&nbsp; {session?.user.name}</span>
            </div>
        </div>
    );
}

export default page;
