import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Philosophy.css';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const words = textRef.current.querySelectorAll('.philosophy-word');

        gsap.to(words, {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
            opacity: 1,
            stagger: 0.1,
            ease: 'none'
        });

        // Velocity transform for accent words
        const accentWords = textRef.current.querySelectorAll('.philosophy-word.accent');
        accentWords.forEach(word => {
            gsap.fromTo(word,
                { skewX: -20, x: -10 },
                {
                    scrollTrigger: {
                        trigger: word,
                        start: 'top 90%',
                        end: 'bottom 10%',
                        scrub: true,
                    },
                    skewX: 0,
                    x: 0,
                    ease: 'power2.out'
                }
            );
        });
    }, []);

    const text = "We believe that every event is a canvas, and every detail a brushstroke. Our philosophy is rooted in the pursuit of perfection, where quiet luxury meets kinetic energy. We don't just plan events; we orchestrate experiences that linger in the soul.";

    return (
        <section ref={sectionRef} id="philosophy" className="philosophy-section">
            <div className="philosophy-sticky">
                <h2 className="ethos-label">Our Ethos</h2>
                <div className="ethos-line" />
            </div>

            <div ref={textRef} className="philosophy-text-container">
                {text.split(" ").map((word, i) => {
                    const isAccent = word.toLowerCase().includes("perfection") || word.toLowerCase().includes("luxury") || word.toLowerCase().includes("soul");
                    return (
                        <span
                            key={i}
                            className={`philosophy-word ${isAccent ? 'accent' : ''}`}
                        >
                            {word}
                        </span>
                    );
                })}
            </div>
        </section>
    );
};

export default Philosophy;
