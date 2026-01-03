import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Planning from './pages/Planning/Planning';
import Organizing from './pages/Organizing/Organizing';
import Management from './pages/Management/Management';
import { EventDataProvider } from './context/EventDataContext';
import './styles/portal.css';

const PortalApp = () => {
    return (
        <EventDataProvider>
            <div className="portal-container">
                <Sidebar />
                <main className="portal-main-content" data-lenis-prevent>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="planning" element={<Planning />} />
                        <Route path="organizing" element={<Organizing />} />
                        <Route path="manage" element={<Management />} />
                    </Routes>
                </main>
            </div>
        </EventDataProvider>
    );
};

export default PortalApp;
