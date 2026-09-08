import logo_image from "@/public/logos/alireza4.png";
import Image from "next/image";
import Link from "next/link";
function Logo() {
    return (
        <div className="relative h-[2.5rem] w-[8rem]">
            <Link href="/">
                <Image
                    fill
                    src={logo_image}
                    alt="logo image"
                />
            </Link>
        </div>
    );
}

export default Logo;
