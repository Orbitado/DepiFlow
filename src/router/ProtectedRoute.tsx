import { useNavigate } from 'react-router-dom';
import { useCheckAuth } from '@/hooks/useCheckAuth';
import Loader from '@/components/common/Loader';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { status } = useCheckAuth();
    const routerNavigate = useNavigate();
    const isAuthenticated = status === 'authenticated';
    const isChecking = status === 'checking';

    if (isChecking) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        routerNavigate('/auth/login');
    } else {
        return <main>{children}</main>;
    }
}

export default ProtectedRoute;
