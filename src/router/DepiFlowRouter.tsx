import AppointmentsPage from '@/pages/AppointmentsPage';
import ClientsPage from '@/pages/ClientsPage';
import DashboardPage from '@/pages/DashboardPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function DepiFlowRouter() {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/clients" element={<ClientsPage />} />

            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default DepiFlowRouter;
