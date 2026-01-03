import React from 'react';
import { useEventData } from '../../context/EventDataContext';
import {
    Users,
    Wallet,
    Calendar,
    CheckCircle2,
    ArrowUpRight
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
    const { guests, budgetItems, milestones } = useEventData();

    // Logic: Summary Stats
    const totalGuests = guests.length;
    const confirmedGuests = guests.filter(g => g.rsvp === 'Yes').length;

    const totalEstimated = budgetItems.reduce((acc, curr) => acc + curr.estimated, 0);
    const totalActual = budgetItems.reduce((acc, curr) => acc + (curr.actual || 0), 0);
    const budgetProgress = (totalActual / totalEstimated) * 100;

    const nextMilestone = milestones.find(m => !m.completed) || milestones[milestones.length - 1];

    return (
        <div className="dashboard-page">
            <header className="page-header">
                <h1 className="page-title">Executive Summary</h1>
                <p className="page-description">High-level overview of your ethereal event progress.</p>
            </header>

            <div className="dashboard-grid">
                {/* Budget Widget */}
                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <Wallet color="var(--portal-accent)" size={24} />
                        <span className="col-label">BUDGET UTILIZATION</span>
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                        ${totalActual.toLocaleString()}
                        <span style={{ fontSize: '0.9rem', opacity: 0.4, marginLeft: '8px' }}>/ ${totalEstimated.toLocaleString()}</span>
                    </h3>
                    <div className="progress-bg">
                        <div className="progress-fill" style={{ width: `${budgetProgress}%` }}></div>
                    </div>
                </div>

                {/* Guest Count Widget */}
                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <Users color="var(--portal-accent)" size={24} />
                        <span className="col-label">RSVP SUMMARY</span>
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                        {confirmedGuests}
                        <span style={{ fontSize: '0.9rem', opacity: 0.4, marginLeft: '8px' }}>Confirmed</span>
                    </h3>
                    <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>Total Invited: {totalGuests}</p>
                </div>

                {/* Milestone Widget */}
                <div className="stat-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <Calendar color="var(--portal-accent)" size={24} />
                        <span className="col-label">NEXT MILESTONE</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{nextMilestone.task}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--portal-accent)', fontWeight: 700 }}>Due: {nextMilestone.date}</p>
                </div>
            </div>

            <div className="dashboard-content-splits">
                <div className="recent-activity">
                    <h4 className="col-label" style={{ marginBottom: '2rem' }}>Recent Milestones</h4>
                    <div className="milestone-list">
                        {milestones.map(m => (
                            <div key={m.id} className="milestone-item">
                                {m.completed ? (
                                    <CheckCircle2 size={18} color="#22c55e" />
                                ) : (
                                    <div style={{ width: '18px', height: '18px', border: '2px solid var(--portal-border)', borderRadius: '50%' }} />
                                )}
                                <span style={{ fontSize: '0.9rem', flex: 1, opacity: m.completed ? 0.4 : 1 }}>{m.task}</span>
                                <span style={{ fontSize: '0.8rem', opacity: 0.4 }}>{m.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="quick-actions" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="col-label" style={{ marginBottom: '0.5rem' }}>Quick Actions</h4>
                    <button className="portal-btn" style={{ background: 'var(--portal-sidebar)', border: '1px solid var(--portal-border)', color: 'var(--portal-ink)', width: '100%', justifyContent: 'space-between' }}>
                        <span>Export Guest List</span>
                        <ArrowUpRight size={16} />
                    </button>
                    <button className="portal-btn" style={{ background: 'var(--portal-sidebar)', border: '1px solid var(--portal-border)', color: 'var(--portal-ink)', width: '100%', justifyContent: 'space-between' }}>
                        <span>Print Itinerary</span>
                        <ArrowUpRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
