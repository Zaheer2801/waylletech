import React from 'react';
import { Briefcase, Brain, Trophy } from 'lucide-react';
import './Features.css';

const Features = () => {
    return (
        <section className="features-section section-padding">
            <div className="container">
                <div className="features-grid">

                    <div className="feature-card glass-card">
                        <div className="feature-icon-wrapper">
                            <Briefcase className="feature-icon" />
                        </div>
                        <h3 className="heading-sm">Real-World Scenarios</h3>
                        <p className="text-secondary">
                            We don't just teach theory. In our afternoon sessions, you will tackle over 6 various real-time scenarios and projects per topic to understand exactly how it's used in the industry.
                        </p>
                    </div>

                    <div className="feature-card glass-card">
                        <div className="feature-icon-wrapper active-glow">
                            <Brain className="feature-icon" />
                        </div>
                        <h3 className="heading-sm">Cumulative Testing</h3>
                        <p className="text-secondary">
                            Day 1 test covers Day 1. Day 5 test covers Days 1-5. Our uniquely challenging testing methodology ensures maximum retention. It gets tougher, but you get stronger.
                        </p>
                    </div>

                    <div className="feature-card glass-card">
                        <div className="feature-icon-wrapper">
                            <Trophy className="feature-icon" />
                        </div>
                        <h3 className="heading-sm">Teach, Train, Deploy</h3>
                        <p className="text-secondary">
                            Our core motive. We teach you the skills, train you through rigorous practice, and deploy you into the industry fully equipped with both technical and communication expertise.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
