import NavBarLayout from '@/components/layout/NavBar';
import SideBarLayout from '@/components/layout/SideBar';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBarLayout />
            <SideBarLayout />
            {children}
        </>
    );
}

export default Layout;
