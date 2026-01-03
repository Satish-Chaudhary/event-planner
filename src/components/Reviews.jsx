import React from 'react';
import './Reviews.css';

const reviews = [
    {
        text: "Ethereal transformed our vision into an atmosphere that was both intimate and grand. Truly world-class.",
        name: "Sophia & James",
        event: "The Glass House Gala"
    },
    {
        text: "Their attention to the kinetic energy of the room is what sets them apart. Every moment was choreographed.",
        name: "Alexander Vance",
        event: "Art Basel Opening"
    },
    {
        text: "Quiet luxury defined. No detail was too small, no request too large. Perfection in every sense.",
        name: "Isabella Moretti",
        event: "Vogue Italia Soiree"
    }
];

const Reviews = () => {
    return (
        <section className="reviews-section">
            <h2 className="reviews-label">Whispers of Excellence</h2>
            <div className="reviews-ticker">
                <div className="ticker-inner">
                    {[...reviews, ...reviews].map((review, i) => (
                        <div key={i} className="review-card">
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <span className="author-name">{review.name}</span>
                                <span className="author-event">{review.event}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
