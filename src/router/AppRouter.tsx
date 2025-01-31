import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import DepiFlowRouter from './DepiFlowRouter';
import PublicRoute from './PublicRoute';
import AuthPage from '@/pages/AuthPage';
import { useCheckAuth } from '@/hooks/useCheckAuth';
import { LoadingSpinner } from '@/components/common/loadingSpinner';

export const AppRouter = () => {
    const { status } = useCheckAuth();

    if (status === 'checking') return <LoadingSpinner />;
    return (
        <Routes>
            <Route
                path="/auth/login"
                element={
                    <PublicRoute>
                        <AuthPage />
                    </PublicRoute>
                }
            />

            <Route
                path="/*"
                element={
                    <ProtectedRoute>
                        <DepiFlowRouter />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};
