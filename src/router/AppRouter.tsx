import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import DepiFlowRouter from './DepiFlowRouter';
import LoginPage from '@/pages/LoginPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <ProtectedRoute>
                        <DepiFlowRouter />
                    </ProtectedRoute>
                }
            />
            <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
    );
};
