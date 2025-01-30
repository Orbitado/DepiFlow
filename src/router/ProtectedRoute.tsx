import { Navigate } from 'react-router-dom';
import { useCheckAuth } from '@/hooks/useCheckAuth';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { status } = useCheckAuth();
    const isAuthenticated = status === 'authenticated';

    return <>{isAuthenticated ? children : <Navigate to="/auth/login" />}</>;
}

export default ProtectedRoute;
