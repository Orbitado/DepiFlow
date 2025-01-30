import { Navigate } from 'react-router-dom';
import { useCheckAuth } from '@/hooks/useCheckAuth';
import Loader from '@/components/common/Loader';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { status } = useCheckAuth();
    const isAuthenticated = status === 'authenticated';
    const isChecking = status === 'checking';

    if (isChecking) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/login" />;
    }

    return <main>{children}</main>;
}

export default ProtectedRoute;
