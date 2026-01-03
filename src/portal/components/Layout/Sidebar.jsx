import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    CalendarDays,
    Users,
    ClipboardCheck,
    LogOut
} from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="portal-sidebar">
            <div className="sidebar-header">
                <span className="brand-name">ETHEREAL</span>
                <span className="app-sub-label">Management Portal</span>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/portal/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/portal/planning" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <CalendarDays size={20} />
                    <span>Planning</span>
                </NavLink>
                <NavLink to="/portal/organizing" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <Users size={20} />
                    <span>Organizing</span>
                </NavLink>
                <NavLink to="/portal/manage" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                    <ClipboardCheck size={20} />
                    <span>Management</span>
                </NavLink>
            </nav>

            <div className="sidebar-footer">
                <NavLink to="/" className="nav-item logout">
                    <LogOut size={20} />
                    <span>Exit Portal</span>
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
