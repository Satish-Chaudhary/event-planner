import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const preloaderRef = useRef(null);
    const textRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const letters = textRef.current.querySelectorAll('.preloader-letter');

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(preloaderRef.current, {
                    yPercent: -100,
                    duration: 1,
                    ease: "power4.inOut",
                    onComplete: onComplete
                });
            }
        });

        tl.fromTo(letters,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.1,
                stagger: {
                    each: 0.1,
                    repeat: 2,
                    yoyo: true,
                    from: "random"
                }
            }
        )
            .to(letters, {
                opacity: 1,
                duration: 0.5,
                stagger: 0.05
            })
            .fromTo(lineRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
                "-=0.5"
            )
            .to(textRef.current, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in"
            });

    }, [onComplete]);

    const title = "ETHEREAL";

    return (
        <div ref={preloaderRef} className="preloader-container">
            <div ref={textRef} className="preloader-text">
                {title.split("").map((letter, i) => (
                    <span key={i} className="preloader-letter">
                        {letter}
                    </span>
                ))}
            </div>
            <div className="preloader-progress-container">
                <div ref={lineRef} className="preloader-bar" />
            </div>
        </div>
    );
};

export default Preloader;
