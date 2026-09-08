import LoginComponent from "./LoginComponent";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

function Header() {
    return (
        <div className="animate-slide-down flex bg-white/10 backdrop-blur-xl px-6 py-2 border border-gray-600/70 fixed z-50 top-0 w-full items-center justify-between">
            <Logo />

            {/* Desktop */}
            <div className="hidden md:block">
                <Navigation />
            </div>

            <div className="hidden md:block">
                <LoginComponent />
            </div>

            {/* Mobile */}
            <MobileMenu />
        </div>
    );
}

export default Header;
