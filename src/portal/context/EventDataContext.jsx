import React, { createContext, useContext, useState, useEffect } from 'react';

const EventDataContext = createContext();

export const useEventData = () => {
    const context = useContext(EventDataContext);
    if (!context) {
        throw new Error('useEventData must be used within an EventDataProvider');
    }
    return context;
};

export const EventDataProvider = ({ children }) => {
    // Mock Guests
    const [guests, setGuests] = useState([
        { id: 1, name: "Alexandra Vance", email: "alex@vance.com", rsvp: "Yes", meal: "Vegan", table: "01" },
        { id: 2, name: "Julian Thorne", email: "j.thorne@style.com", rsvp: "Yes", meal: "Standard", table: "01" },
        { id: 3, name: "Elena Rossi", email: "elena@production.it", rsvp: "Pending", meal: "Standard", table: "02" },
        { id: 4, name: "Marcus Chen", email: "marcus@tech.io", rsvp: "Yes", meal: "Kosher", table: "03" },
        { id: 5, name: "Isabella Moretti", email: "isabella@vogue.it", rsvp: "No", meal: "N/A", table: "N/A" },
    ]);

    // Mock Budget
    const [budgetItems, setBudgetItems] = useState([
        { id: 1, category: "Venue", estimated: 12000, actual: 12500, status: "Paid" },
        { id: 2, category: "Catering", estimated: 8000, actual: 0, status: "Pending" },
        { id: 3, category: "Entertainment", estimated: 4500, actual: 4500, status: "Paid" },
        { id: 4, category: "Floral Design", estimated: 3000, actual: 1500, status: "Pending" },
    ]);

    // Mock Milestones
    const [milestones, setMilestones] = useState([
        { id: 1, task: "Confirm Venue Deposit", date: "Jan 15, 2026", completed: true },
        { id: 2, task: "Final Menu Tasting", date: "Feb 02, 2026", completed: false },
        { id: 3, task: "Table Decor Approval", date: "Feb 10, 2026", completed: false },
    ]);

    const addGuest = (newGuest) => {
        setGuests(prev => [...prev, { ...newGuest, id: Date.now() }]);
    };

    const updateRSVP = (id, status) => {
        setGuests(prev => prev.map(g => g.id === id ? { ...g, rsvp: status } : g));
    };

    const deleteGuest = (id) => {
        setGuests(prev => prev.filter(g => g.id !== id));
    };

    const value = {
        guests,
        budgetItems,
        milestones,
        addGuest,
        updateRSVP,
        deleteGuest
    };

    return (
        <EventDataContext.Provider value={value}>
            {children}
        </EventDataContext.Provider>
    );
};
