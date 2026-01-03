import React, { useState } from 'react';
import {
    MapPin,
    CheckCircle2,
} from 'lucide-react';
import './Management.css';

const Management = () => {
    const [activeView, setActiveView] = useState('itinerary'); // itinerary | checklist

    const timeline = [
        { time: '08:00 AM', event: 'Vendor Load-in', location: 'Grand Ballroom', status: 'completed' },
        { time: '10:30 AM', event: 'Floral Installation', location: 'Ceremony Site', status: 'completed' },
        { time: '01:00 PM', event: 'Photography Begins', location: 'Suite 405', status: 'current' },
        { time: '04:30 PM', event: 'Guest Arrival', location: 'Welcome Lounge', status: 'pending' },
        { time: '05:00 PM', event: 'Ceremony Start', location: 'The Garden', status: 'pending' },
    ];

    const checklist = [
        { id: 1, task: 'Verify signage placement', category: 'Morning', done: true },
        { id: 2, task: 'Confirm caterer is on-site', category: 'Morning', done: true },
        { id: 3, task: 'Check audio setup in ballroom', category: 'Mid-day', done: false },
        { id: 4, task: 'Collect marriage license', category: 'Pre-Ceremony', done: false },
        { id: 5, task: 'Hand out bouquets', category: 'Pre-Ceremony', done: false },
    ];

    return (
        <div className="management-page">
            <header className="page-header">
                <h1 className="page-title">Day-of Orchestration</h1>
                <p className="page-description">Real-time control center for precise event execution.</p>
            </header>

            <div className="tabs-navigation">
                <button
                    className={`tab-btn ${activeView === 'itinerary' ? 'active' : ''}`}
                    onClick={() => setActiveView('itinerary')}
                >
                    Visual Itinerary
                </button>
                <button
                    className={`tab-btn ${activeView === 'checklist' ? 'active' : ''}`}
                    onClick={() => setActiveView('checklist')}
                >
                    Master Checklist
                </button>
            </div>

            {activeView === 'itinerary' ? (
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    <div className="timeline-list">
                        {timeline.map((item, idx) => (
                            <div key={idx} className={`timeline-item ${item.status === 'current' ? 'active' : ''}`}>
                                <div className="timeline-time">
                                    {item.time}
                                </div>

                                <div className="timeline-dot"></div>

                                <div className="timeline-content">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                        <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>{item.event}</h4>
                                        {item.status === 'current' && (
                                            <span style={{ fontSize: '0.65rem', background: 'var(--portal-accent)', color: '#000', padding: '3px 10px', borderRadius: '4px', fontWeight: 900 }}>LIVE NOW</span>
                                        )}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.5, fontSize: '0.85rem' }}>
                                        <MapPin size={16} />
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="checklist-container">
                    {['Morning', 'Mid-day', 'Pre-Ceremony'].map(cat => (
                        <div key={cat} className="checklist-section">
                            <h5 className="col-label" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
                                <span style={{ width: '4px', height: '18px', background: 'var(--portal-accent)', marginRight: '1rem' }}></span>
                                {cat} Phase
                            </h5>
                            <div className="checklist-group">
                                {checklist.filter(c => c.category === cat).map(item => (
                                    <div key={item.id} className="check-item">
                                        {item.done ? (
                                            <CheckCircle2 size={22} color="#22c55e" />
                                        ) : (
                                            <div style={{ width: '22px', height: '22px', border: '2px solid var(--portal-border)', borderRadius: '6px' }} />
                                        )}
                                        <span style={{
                                            fontSize: '1rem',
                                            opacity: item.done ? 0.35 : 1,
                                            textDecoration: item.done ? 'line-through' : 'none',
                                            fontWeight: 500
                                        }}>
                                            {item.task}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Management;
