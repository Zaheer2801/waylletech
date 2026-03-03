import React from 'react';
import { ChevronRight } from 'lucide-react';
import './About.css';

const About = ({ onExplore }) => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-content text-center animate-fade-up">
                    <h2 className="heading-lg mb-4">Empowering the next generation.</h2>

                    <p className="about-description mx-auto mb-8 text-secondary">
                        At WAYLLE TECH, our mission is built right into our name: providing the perfect{' '}
                        <strong className="glass-shine-text">way to learn, levelup, and excel in technology</strong>.
                        {' '}We are a collective of seasoned industry professionals dedicated to bridging the gap between theoretical computer science and practical, deployable engineering.
                    </p>

                    <button className="btn btn-primary btn-large explore-btn" onClick={onExplore}>
                        Explore Bootcamp <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
