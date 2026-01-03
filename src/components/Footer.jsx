import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Footer.css';

const Footer = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            const distance = Math.sqrt(x * x + y * y);

            if (distance < 150) {
                gsap.to(button, {
                    x: x * 0.4,
                    y: y * 0.4,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <footer className="footer-section">
            <div className="footer-inner">
                <h2 className="heading-xl footer-title">
                    Let's<br />Create
                </h2>

                <div className="footer-form-container">
                    <form className="footer-form">
                        <div className="input-wrap">
                            <input
                                type="text"
                                placeholder="YOUR NAME"
                                className="footer-input"
                            />
                        </div>
                        <div className="input-wrap">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="footer-input"
                            />
                        </div>
                    </form>
                </div>

                <button
                    ref={buttonRef}
                    className="magnetic-submit"
                >
                    Send
                </button>
            </div>

            <div className="footer-bottom">
                <p className="footer-copy">© 2026 Ethereal Gatherings</p>
                <div className="footer-links">
                    <a href="#" className="footer-link">Instagram</a>
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">Vimeo</a>
                </div>
                <p className="designer-credit">Antigravity Studio</p>
            </div>
        </footer>
    );
};

export default Footer;
