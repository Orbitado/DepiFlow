import SideBarLayout from '@/components/layout/SideBar';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="grid grid-cols-[250px_1fr] bg-gray-100 dark:bg-gray-800 min-h-screen">
                <SideBarLayout />
                <div className="w-full">{children}</div>
            </main>
        </>
    );
}

export default Layout;
