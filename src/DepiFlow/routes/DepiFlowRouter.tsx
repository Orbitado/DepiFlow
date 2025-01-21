import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';
import { AppointmentHistort } from '../pages/AppointmentHistort';
import { AppointmentPage } from '../pages/AppointmentPage';
import { ClientsPage } from '../pages/ClientsPage';
import Layout from '@/components/layout/Layout';

export const DepiFlowRouter = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/*" element={<DashboardPage />} />
                    <Route path="/clients" element={<ClientsPage />} />
                    <Route path="/appointment" element={<AppointmentPage />} />
                    <Route path="/history" element={<AppointmentHistort />} />
                </Routes>
            </Layout>
        </>
    );
};
