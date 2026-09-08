import logo_image from "@/public/logos/alireza4.png";
import Image from "next/image";
import footer_image from "@/public/logo.png";
import Logo from "./Logo";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

function Footer() {
    return (
        <footer className="relative flex flex-col gap-10 mt-30 mb-10 max-w-4xl mx-2 md:mx-4 lg:mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-2 p-8 bg-white/10 rounded-xl">
                <div className="flex flex-col gap-4 items-start justify-center">
                    <p className="text-[2.7rem] md:text-[3rem] leading-10 font-extrabold">
                        Experience our restaurant
                    </p>
                    <p className="text-white/50">20+ different food</p>
                    <Link
                        href="/menu"
                        className="flex font-semibold items-center gap-2 text-white/80 hover:gap-3 hover:text-white transition-all duration-300"
                    >
                        Explain <FaLongArrowAltRight />{" "}
                    </Link>
                </div>
                <div className="hidden md:block absolute left-[50%] translate-x-[50%] w-60 h-60 self-center mx-auto">
                    <Image
                        fill
                        alt="footer image"
                        src={footer_image}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-6 md:gap-2 md:flex-row items-center justify-between px-8 py-4 rounded-xl bg-white/10">
                <p>
                    © 2026 Persian Plate — Designed with passion by Alireza
                    Hamidi.
                </p>
                <Logo />
            </div>
        </footer>
    );
}

export default Footer;
