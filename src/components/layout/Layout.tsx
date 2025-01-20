import NavBarLayout from '@/components/layout/NavBar';
import SideBarLayout from '@/components/layout/SideBar';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBarLayout />
            <SideBarLayout />
            <main className="bg-gray-100 dark:bg-gray-800">{children}</main>
        </>
    );
}

export default Layout;
