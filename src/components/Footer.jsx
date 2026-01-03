import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import toast from 'react-hot-toast';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset(); // Reset the form fields
        toast.success('Thank you. We\'ll be in touch.');
    };

    return (
        <footer id="contact" className="footer-section">
            <div className="footer-inner">
                <h2 className="heading-xl footer-title">
                    Let's<br />Create
                </h2>

                <div className="footer-form-container">
                    <form onSubmit={handleSubmit} className="footer-form">
                        <div className="input-wrap">
                            <input
                                required
                                type="text"
                                placeholder="YOUR NAME"
                                className="footer-input"
                            />
                        </div>
                        <div className="input-wrap">
                            <input
                                required
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="footer-input"
                            />
                        </div>
                        <button
                            ref={buttonRef}
                            type="submit"
                            className="magnetic-submit"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-grid">
                    <div className="footer-col col-brand">
                        <span className="footer-logo-small">ETHEREAL</span>
                        <p className="footer-copy">© 2026 Ethereal Gatherings <br /> All Rights Reserved.</p>
                    </div>

                    <div className="footer-col col-links">
                        <span className="col-label">Explore</span>
                        <nav className="footer-nav">
                            <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="footer-link">Home</button>
                            <button onClick={() => document.getElementById('philosophy').scrollIntoView({ behavior: 'smooth' })} className="footer-link">Philosophy</button>
                            <button onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })} className="footer-link">Portfolio</button>
                            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="footer-link">Services</button>
                        </nav>
                    </div>

                    <div className="footer-col col-contact">
                        <span className="col-label">Inquire</span>
                        <a href="mailto:hello@ethereal.la" className="footer-link email-link">hello@ethereal.la</a>
                        <div className="footer-socials">
                            <a href="#" className="footer-link">Instagram</a>
                            <a href="#" className="footer-link">LinkedIn</a>
                            <a href="#" className="footer-link">Vimeo</a>
                        </div>
                    </div>

                    <div className="footer-col col-credit">
                        <div className="credit-wrap">
                            <span className="col-label">Creation</span>
                            <p className="designer-credit">Designed & Developed by <br /><span className="creator-name">Zeros Studio</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
