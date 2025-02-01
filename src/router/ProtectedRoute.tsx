import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { status } = useSelector((state: RootState) => state.auth);
    const location = useLocation();

    if (status === 'not-authenticated') {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}

export default ProtectedRoute;
