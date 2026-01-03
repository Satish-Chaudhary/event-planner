import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        // Set initial centering
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1, // Small duration for a slight smooth trail
                ease: 'sine.out'
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 4,
                backgroundColor: '#Eaeaea',
                duration: 0.3
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'transparent',
                duration: 0.3
            });
        };

        window.addEventListener('mousemove', moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, .magnetic-submit, .nav-btn');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div ref={cursorRef} className="custom-cursor">
            <div className="cursor-dot" />
        </div>
    );
};

export default CustomCursor;
