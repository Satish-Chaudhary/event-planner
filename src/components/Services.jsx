import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const services = [
    {
        id: "01",
        title: "Venue Scouting",
        description: "Curating unusual and exclusive locations globally.",
        images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3", "https://images.unsplash.com/photo-1511795409834-ef04bbd61622"]
    },
    {
        id: "02",
        title: "Art Direction",
        description: "Defining the visual language and aesthetic soul of your event.",
        images: ["https://images.unsplash.com/photo-1469334031218-e382a71b716b", "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3"]
    },
    {
        id: "03",
        title: "Logistics",
        description: "Seamless execution behind the scenes.",
        images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622", "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"]
    }
];

const Services = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="services" className="services-section">
            <h2 className="services-label">Services</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className="service-item"
                        style={{ opacity: hovered !== null && hovered !== index ? 0.3 : 1 }}
                    >
                        <div className="service-header">
                            <div className="service-title-wrap">
                                <span className="service-id">{service.id}</span>
                                <h3 className="service-title">{service.title}</h3>
                            </div>
                            <span className="service-description">
                                {service.description}
                            </span>
                        </div>

                        <AnimatePresence>
                            {hovered === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                    className="service-marquee-container"
                                >
                                    <div className="service-marquee-content">
                                        <div className="marquee-inner">
                                            {[...service.images, ...service.images].map((img, i) => (
                                                <img
                                                    key={i}
                                                    src={img + "?auto=format&fit=crop&q=80&w=400&h=250"}
                                                    className="marquee-img"
                                                    alt="Marquee"
                                                    loading="lazy"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
