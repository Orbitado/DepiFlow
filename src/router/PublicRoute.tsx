import { useCheckAuth } from '@/hooks/useCheckAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }: { children: React.ReactNode }) {
    const { status } = useCheckAuth();
    const isAuthenticated = status === 'authenticated';

    return <>{!isAuthenticated ? children : <Navigate to="/" />}</>;
}

export default PublicRoute;
