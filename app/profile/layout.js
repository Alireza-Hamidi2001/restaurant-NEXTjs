import SideNavigation from "../_components/SideNavigation";

function Layout({ children }) {
    return (
        <div className="grid grid-cols-[13rem_1fr] h-full">
            <SideNavigation />
            <div className="">{children}</div>
        </div>
    );
}

export default Layout;
