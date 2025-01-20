import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@/pages/Auth/LoginPage';
import { DepiFlowRouter } from '@/DepiFlow/routes/DepiFlowRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* LOGIN Y REGISTRO*/}
                <Route path="/auth/*" element={<LoginPage />} />

                {/* APP */}
                <Route path="/*" element={<DepiFlowRouter />} />
            </Routes>
        </>
    );
};
