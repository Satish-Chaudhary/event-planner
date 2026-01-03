import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SelectedWorks.css';

gsap.registerPlugin(ScrollTrigger);

const works = [
    { title: "Azure Gala", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200", category: "Corporate" },
    { title: "Onyx Soiree", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200", category: "Wedding" },
    { title: "Ivory Bloom", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200", category: "Social" },
    { title: "Crimson Night", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200", category: "Cultural" },
];

const SelectedWorks = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { x: 0 },
            {
                x: "-100vw",
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 1,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section ref={triggerRef} className="works-horizontal-trigger">
            <div ref={sectionRef} className="works-container">
                <div className="works-panel">
                    <h2 className="works-label">Selected Works</h2>
                    <div className="works-grid">
                        {works.slice(0, 2).map((work, i) => (
                            <div key={i} className="work-card">
                                <img src={work.image} alt={work.title} className="work-img" />
                                <div className="work-overlay">
                                    <p className="work-category">{work.category}</p>
                                    <h3 className="work-title">{work.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="works-panel">
                    <div className="works-grid">
                        {works.slice(2).map((work, i) => (
                            <div key={i} className="work-card">
                                <img src={work.image} alt={work.title} className="work-img" />
                                <div className="work-overlay">
                                    <p className="work-category">{work.category}</p>
                                    <h3 className="work-title">{work.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedWorks;
