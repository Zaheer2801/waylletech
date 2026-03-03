import React, { useState, useEffect } from 'react';
import './Intro.css';

const Intro = ({ onIntroComplete }) => {
    const [animationStarted, setAnimationStarted] = useState(false);
    const [fadeout, setFadeout] = useState(false);

    useEffect(() => {
        // Start drawing out the slogan after 1.5 seconds of holding WAYLLE TECH
        const timer1 = setTimeout(() => {
            setAnimationStarted(true);
        }, 1500);

        // End the intro sequence after 5 seconds total
        const timer2 = setTimeout(() => {
            setFadeout(true);
        }, 5500);

        // Tell parent App to unmount intro after fade completes
        const timer3 = setTimeout(() => {
            onIntroComplete();
        }, 6500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onIntroComplete]);

    return (
        <div className={`intro-container ${fadeout ? 'fade-bg' : ''}`}>
            <div className={`cinematic-wrapper ${animationStarted ? 'animate' : ''}`}>

                <div className="slogan-container">
                    {/* W A Y  */}
                    <span className="slogan-cap cap-w">W</span>
                    <span className="slogan-cap cap-a">a</span>
                    <span className="slogan-cap cap-y">y</span>
                    <span className="slogan-tail tail-1">&nbsp;To&nbsp;</span>

                    {/* L */}
                    <span className="slogan-cap cap-l1">L</span>
                    <span className="slogan-tail tail-2">earn,&nbsp;</span>

                    {/* L */}
                    <span className="slogan-cap cap-l2">L</span>
                    <span className="slogan-tail tail-3">evel&nbsp;Up,&nbsp;</span>

                    {/* E */}
                    <span className="slogan-cap cap-e">E</span>
                    <span className="slogan-tail tail-4">xcel&nbsp;In&nbsp;Technology</span>

                    {/* TECH */}
                    <span className="tech-drop">&nbsp;TECH</span>
                </div>

            </div>
        </div>
    );
};

export default Intro;
