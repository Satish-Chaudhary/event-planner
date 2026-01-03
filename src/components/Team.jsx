import React from 'react';
import './Team.css';

const team = [
    {
        id: "01",
        name: "Julian Thorne",
        role: "Creative Director",
        bio: "Visionary behind some of the world's most exclusive private gatherings. Julian blends architectural principles with emotional storytelling to create unforgettable atmospheres.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "02",
        name: "Elena Rossi",
        role: "Lead Strategist",
        bio: "Specializing in global logistics and high-stakes production. Elena ensures that the 'ethereal' vision is executed with military precision and absolute grace.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "03",
        name: "Marcus Chen",
        role: "Production Head",
        bio: "A master of kinetic technology and spatial soundscapes. Marcus bridges the gap between the physical and digital, making every environment feel alive.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
    }
];

const Team = () => {
    return (
        <section className="team-section-split">
            <div className="team-header-minimal">
                <h2 className="team-label">The Visionaries</h2>
                <div className="team-label-line" />
            </div>

            <div className="team-rows-container">
                {team.map((member, i) => (
                    <div key={i} className="team-row">
                        <div className="member-visual">
                            <div className="image-circle">
                                <img src={member.image} alt={member.name} className="circle-img" />
                            </div>
                        </div>

                        <div className="member-bio-card">
                            <span className="bio-id">{member.id}</span>
                            <div className="bio-header">
                                <h3 className="bio-name">{member.name}</h3>
                                <p className="bio-role">{member.role}</p>
                            </div>
                            <p className="bio-text">{member.bio}</p>

                            {/* Decorative element */}
                            <div className="bio-corner-accent" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
