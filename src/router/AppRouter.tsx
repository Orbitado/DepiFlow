import { Navigate, Route, Routes } from 'react-router-dom';
import { DepiFlowRouter } from '@/DepiFlow/routes/DepiFlowRouter';

import { CheckingAuth } from '@/components/Auth/CheckingAuth';
import { LoginPage } from '@/pages/Auth/LoginPage';
import { useCheckAuth } from '@/hooks/useCheckAuth';

export const AppRouter = () => {
    const { status } = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />;
    }
    return (
        <>
            <Routes>
                {status === 'authenticated' ? (
                    <Route path="/*" element={<DepiFlowRouter />} />
                ) : (
                    <Route path="/auth/login" element={<LoginPage />} />
                )}
                <Route path="/*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </>
    );
};
