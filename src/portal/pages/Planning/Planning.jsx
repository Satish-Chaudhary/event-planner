import React, { useState } from 'react';
import { useEventData } from '../../context/EventDataContext';
import { Trash2, Plus } from 'lucide-react';
import './Planning.css';

const Planning = () => {
    const { budgetItems } = useEventData();
    const [activeTab, setActiveTab] = useState('budget'); // budget | moodboard

    const totalEstimated = budgetItems.reduce((acc, curr) => acc + curr.estimated, 0);
    const totalActual = budgetItems.reduce((acc, curr) => acc + (curr.actual || 0), 0);

    return (
        <div className="planning-page">
            <header className="page-header">
                <h1 className="page-title">Planning & Aesthetics</h1>
                <p className="page-description">Manage your finances and visual direction in one ecosystem.</p>
            </header>

            <div className="tabs-navigation">
                <button
                    className={`tab-btn ${activeTab === 'budget' ? 'active' : ''}`}
                    onClick={() => setActiveTab('budget')}
                >
                    Budget Tracker
                </button>
                <button
                    className={`tab-btn ${activeTab === 'moodboard' ? 'active' : ''}`}
                    onClick={() => setActiveTab('moodboard')}
                >
                    Mood Board
                </button>
            </div>

            {activeTab === 'budget' ? (
                <section className="budget-section">
                    <div className="budget-summary-wide">
                        <div className="summary-card">
                            <span className="col-label">Total Estimated</span>
                            <h3 style={{ fontSize: '2.5rem', marginTop: '0.75rem' }}>${totalEstimated.toLocaleString()}</h3>
                        </div>
                        <div className="summary-card">
                            <span className="col-label">Total Spent</span>
                            <h3 style={{ fontSize: '2.5rem', marginTop: '0.75rem', color: 'var(--portal-accent)' }}>${totalActual.toLocaleString()}</h3>
                        </div>
                    </div>

                    <div className="portal-table-container">
                        <table className="portal-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Estimated Cost</th>
                                    <th>Actual Cost</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {budgetItems.map(item => (
                                    <tr key={item.id}>
                                        <td style={{ fontWeight: 600 }}>{item.category}</td>
                                        <td>${item.estimated.toLocaleString()}</td>
                                        <td>${item.actual.toLocaleString()}</td>
                                        <td>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                padding: '6px 12px',
                                                borderRadius: '6px',
                                                background: item.status === 'Paid' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(234, 234, 234, 0.05)',
                                                color: item.status === 'Paid' ? '#22c55e' : '#Eaeaea'
                                            }}>{item.status}</span>
                                        </td>
                                        <td>
                                            <button style={{ background: 'transparent', border: 'none', color: '#ef4444', opacity: 0.5, cursor: 'pointer' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            ) : (
                <section className="moodboard-section">
                    <div className="moodboard-grid">
                        {[
                            "1519167758481-83f550bb49b3", // Wedding/Gala
                            "1511795409834-ef04bbd61622", // Tablescape
                            "1469334031218-e382a71b716b", // Fashion/Aesthetic
                            "1533174072545-7a4b6ad7a6c3", // Night Event
                            "1492684223066-81342ee5ff30"  // Celebration
                        ].map((id, i) => (
                            <div key={i} className="mood-item">
                                <img
                                    src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=1920`}
                                    alt="Theme Mood"
                                    loading="lazy"
                                />
                                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: '#fff', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                    Theme Element {i + 1}
                                </div>
                            </div>
                        ))}
                        <button style={{
                            height: '350px',
                            border: '2px dashed var(--portal-border)',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            color: 'var(--portal-ink)',
                            opacity: 0.4,
                            cursor: 'pointer',
                            background: 'transparent',
                            transition: 'opacity 0.3s ease'
                        }}>
                            <Plus size={40} />
                            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Add Inspiration</span>
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Planning;
