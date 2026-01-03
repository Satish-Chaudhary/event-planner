import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 40;
            const yPos = (clientY / window.innerHeight - 0.5) * 40;

            gsap.to(textRef.current, {
                x: xPos,
                y: yPos,
                duration: 1.5,
                ease: "power3.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={containerRef} className="hero-section">
            <div className="hero-video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-party-crowd-at-a-concert-4024-large.mp4" type="video/mp4" />
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
                    <button className="nav-btn">Menu</button>
                    <button className="nav-btn">Contact</button>
                    <button className="nav-btn">Sound Off</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
