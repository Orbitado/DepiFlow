import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function PublicRoute({ children }: { children: React.ReactNode }) {
    const { status } = useSelector((state: RootState) => state.auth);

    if (status === 'authenticated') {
        return <Navigate to="/dashboard" replace />;
    }

    return <>{children}</>;
}

export default PublicRoute;
