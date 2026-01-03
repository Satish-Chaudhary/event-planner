import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const rect = container.getBoundingClientRect();

            // Calculate relative position for the spotlight
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            // Set CSS variables for spotlight center
            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={containerRef} className="hero-section" id="home">
            <div className="hero-video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video video-gray"
                >
                    <source src="https://www.pexels.com/download/video/2361938/" type="video/mp4" />
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video video-color"
                >
                    <source src="https://www.pexels.com/download/video/2361938/" type="video/mp4" />
                </video>
            </div>

            <div className="hero-content">
                <h1
                    ref={textRef}
                    className="heading-xl hero-title"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1920")',
                    }}
                >
                    Curating<br />Memories
                </h1>
            </div>

            <div className="hero-dock">
                <div className="glass-nav">
                    <button onClick={() => scrollToSection('philosophy')} className="nav-btn">Ethos</button>
                    <button onClick={() => scrollToSection('works')} className="nav-btn">Works</button>
                    <button onClick={() => scrollToSection('services')} className="nav-btn">Services</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-btn">Contact</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
