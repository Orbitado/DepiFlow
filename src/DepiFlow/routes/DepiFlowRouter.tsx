import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';
import { AppointmentHistort } from '../pages/AppointmentHistort';
import { AppointmentPage } from '../pages/AppointmentPage';
import { ClientsPage } from '../pages/ClientsPage';

export const DepiFlowRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<DashboardPage />} />
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/appointment" element={<AppointmentPage />} />
                <Route path="/history" element={<AppointmentHistort />} />
            </Routes>
        </>
    );
};
