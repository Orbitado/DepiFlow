import SideBarLayout from '@/components/layout/SideBar';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="block sm:grid sm:grid-cols-[250px_1fr] bg-gray-100 dark:bg-gray-800 min-h-screen">
                <SideBarLayout />
                <div className="px-12 py-6 w-full">{children}</div>
            </main>
        </>
    );
}

export default Layout;
