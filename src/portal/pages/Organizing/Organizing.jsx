import React, { useState } from 'react';
import { useEventData } from '../../context/EventDataContext';
import { Plus, Search, Trash2 } from 'lucide-react';
import './Organizing.css';

const Organizing = () => {
    const { guests, addGuest, deleteGuest } = useEventData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const [newGuest, setNewGuest] = useState({
        name: '',
        email: '',
        rsvp: 'Pending',
        meal: 'Standard',
        table: 'N/A'
    });

    const handleAddGuest = (e) => {
        e.preventDefault();
        addGuest(newGuest);
        setIsModalOpen(false);
        setNewGuest({ name: '', email: '', rsvp: 'Pending', meal: 'Standard', table: 'N/A' });
    };

    const filteredGuests = guests.filter(guest =>
        guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guest.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="organizing-page">
            <header className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 className="page-title">Guest List Manager</h1>
                    <p className="page-description">Maintain and organize your event attendees.</p>
                </div>
                <button className="portal-btn btn-primary" onClick={() => setIsModalOpen(true)}>
                    <Plus size={18} />
                    Add Guest
                </button>
            </header>

            <div className="table-controls">
                <div className="search-wrap">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search guests..."
                        className="portal-input search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="portal-table-container">
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th>RSVP Status</th>
                            <th>Meal Pref.</th>
                            <th>Table No.</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGuests.length > 0 ? (
                            filteredGuests.map(guest => (
                                <tr key={guest.id}>
                                    <td style={{ fontWeight: 600 }}>{guest.name}</td>
                                    <td style={{ opacity: 0.7 }}>{guest.email}</td>
                                    <td>
                                        <span className={`status-pill ${guest.rsvp.toLowerCase()}`}>
                                            {guest.rsvp}
                                        </span>
                                    </td>
                                    <td>{guest.meal}</td>
                                    <td>{guest.table}</td>
                                    <td>
                                        <button onClick={() => deleteGuest(guest.id)} className="delete-btn">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', opacity: 0.5 }}>
                                    User not available in the list.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className="modal-title">Add New Guest</h2>
                        <form onSubmit={handleAddGuest}>
                            <div className="form-group">
                                <label>Guest Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="portal-input"
                                    placeholder="e.g. Alexandra Vance"
                                    value={newGuest.name}
                                    onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="portal-input"
                                    placeholder="alex@example.com"
                                    value={newGuest.email}
                                    onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Meal Preference</label>
                                <select
                                    className="portal-input"
                                    value={newGuest.meal}
                                    onChange={(e) => setNewGuest({ ...newGuest, meal: e.target.value })}
                                >
                                    <option value="Standard">Standard</option>
                                    <option value="Vegan">Vegan</option>
                                    <option value="Vegetarian">Vegetarian</option>
                                    <option value="Kosher">Kosher</option>
                                </select>
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="portal-btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="portal-btn btn-primary">Save Guest</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Organizing;
