import React from 'react';
import { Target, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import './Curriculum.css';

const Curriculum = () => {
    return (
        <section className="curriculum-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="heading-md">The 45-Day Evolution.</h2>
                    <p className="text-secondary max-w-2xl mx-auto">A highly specialized dual-phase curriculum designed to make you not only a strong developer, but a competent professional ready for deployment.</p>
                </div>

                <div className="curriculum-grid">
                    {/* Phase 1 */}
                    <div className="curriculum-card glass-card">
                        <div className="phase-badge text-blue">Days 1 - 20</div>
                        <h3 className="heading-sm">Technical Mastery Phase</h3>
                        <p className="text-secondary">Intensive focus purely on technical skill acquisition. We build your foundation in Full Stack Development from the ground up.</p>

                        <ul className="feature-list">
                            <li>
                                <div className="list-icon-bg"><Zap size={16} /></div>
                                <span>Core Programming & Logic Building</span>
                            </li>
                            <li>
                                <div className="list-icon-bg"><Zap size={16} /></div>
                                <span>Frontend Development (UI/UX)</span>
                            </li>
                            <li>
                                <div className="list-icon-bg"><Zap size={16} /></div>
                                <span>Backend Architecture & APIs</span>
                            </li>
                            <li>
                                <div className="list-icon-bg"><Zap size={16} /></div>
                                <span>Database Design & Management</span>
                            </li>
                        </ul>
                    </div>

                    {/* Phase 2 */}
                    <div className="curriculum-card glass-card">
                        <div className="phase-badge text-blue">Days 21 - 45</div>
                        <h3 className="heading-sm">The "Deploy" Phase</h3>
                        <p className="text-secondary">Technical training continues, but we introduce intense communication and personality development sessions to make you interview-ready.</p>

                        <ul className="feature-list pt-heavy">
                            <li>
                                <div className="list-icon-bg"><Target size={16} /></div>
                                <span>Advanced Projects & Portfolios</span>
                            </li>
                            <li>
                                <div className="list-icon-bg"><MessageSquare size={16} /></div>
                                <span>Communication Skills Training</span>
                            </li>
                            <li>
                                <div className="list-icon-bg"><ShieldCheck size={16} /></div>
                                <span>Personality & Confidence Building</span>
                            </li>
                            <li>
                                <div className="list-icon-bg"><Target size={16} /></div>
                                <span>Mock Interviews & Deployment Prep</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
