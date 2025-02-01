import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/AppSideBar';
import { useEffect } from 'react';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { status } = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    const currentTheme = useSelector((state: RootState) => state.theme.theme);

    useEffect(() => {
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [currentTheme]);

    if (status === 'not-authenticated') {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <main className="mx-auto p-6 min-h-screen container">{children}</main>
        </SidebarProvider>
    );
}

export default ProtectedRoute;
