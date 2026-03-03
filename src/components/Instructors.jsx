import React from 'react';
import { Briefcase, Award, Terminal } from 'lucide-react';
import './Instructors.css';

const instructors = [
    {
        name: 'David Chen',
        role: 'Lead Full Stack Architect',
        background: 'Ex-Google, 12+ Years Experience',
        bio: 'Specializes in highly scalable distributed systems and modern React state management. Led engineering teams that handled millions of daily active users.',
        icon: <Terminal size={20} className="text-primary" />
    },
    {
        name: 'Sarah Rahman',
        role: 'Backend Systems Expert',
        background: 'Ex-Stripe, 9+ Years Experience',
        bio: 'Database architecture and complex API design specialist. Passionate about teaching clean code principles and robust system design.',
        icon: <Briefcase size={20} className="text-secondary" />
    },
    {
        name: 'Michael Webb',
        role: 'Frontend & UI Director',
        background: 'Award-winning Designer & Dev',
        bio: 'Bridges the gap between technical execution and pixel-perfect design. Expert in CSS architectures, animations, and accessible web experiences.',
        icon: <Award size={20} className="text-primary" />
    }
];

const Instructors = () => {
    return (
        <section className="instructors-section section-padding" id="instructors">
            <div className="container">
                <div className="section-header text-center animate-fade-up">
                    <h2 className="heading-md">Learn from <span className="text-gradient">Industry Veterans</span></h2>
                    <p className="text-secondary">Our curriculum is designed and taught by seasoned professionals who know exactly what top-tier tech companies look for in engineers.</p>
                </div>

                <div className="instructors-grid">
                    {instructors.map((instructor, idx) => (
                        <div className="instructor-card glass-card animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }} key={idx}>
                            <div className="instructor-avatar">
                                {instructor.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="instructor-info">
                                <h3 className="instructor-name">{instructor.name}</h3>
                                <p className="instructor-role text-primary">{instructor.role}</p>

                                <div className="instructor-background">
                                    {instructor.icon}
                                    <span>{instructor.background}</span>
                                </div>

                                <p className="instructor-bio text-secondary">{instructor.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructors;
