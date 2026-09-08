import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { auth } from "../_lib/auth";
import ProfileDropdown from "./ProfileDropdown";

async function LoginComponent() {
    const session = await auth();
    console.log(session);

    return (
        <ul className="relative">
            {session ? (
                <ProfileDropdown session={session} />
            ) : (
                <Link href="/login">
                    <li className="flex items-center gap-1">
                        <FiLogIn />
                        Login
                    </li>
                </Link>
            )}
        </ul>
    );
}

export default LoginComponent;
