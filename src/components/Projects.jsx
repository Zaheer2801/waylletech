import React from 'react';
import { Code, Server, Layout, Database } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'E-Commerce Platform',
        category: 'Full Stack App',
        description: 'A complete marketplace with product listings, cart management, and seamless Stripe payment integration.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        icon: <Layout size={24} className="text-primary" />
    },
    {
        title: 'Real-Time Collaboration Workspace',
        category: 'WebSocket App',
        description: 'A live document editor supporting multiple concurrent users, chat, and instant synchronization.',
        tech: ['React', 'Socket.io', 'Express', 'Redis'],
        icon: <Server size={24} className="text-secondary" />
    },
    {
        title: 'AI-Powered Task Manager',
        category: 'AI Integration',
        description: 'Smart task prioritization using external AI APIs, complete with user authentication and drag-and-drop boards.',
        tech: ['React', 'OpenAI', 'PostgreSQL', 'JWT'],
        icon: <Code size={24} className="text-primary" />
    },
    {
        title: 'Financial Dashboard',
        category: 'Data Visualization',
        description: 'Interactive analytics dashboard displaying complex datasets with responsive charting and data export.',
        tech: ['React', 'Chart.js', 'Express', 'MySQL'],
        icon: <Database size={24} className="text-secondary" />
    }
];

const Projects = () => {
    return (
        <section className="projects-section section-padding" id="projects">
            <div className="container">
                <div className="section-header text-center animate-fade-up">
                    <h2 className="heading-md">What You Will <span className="text-gradient">Build</span></h2>
                    <p className="text-secondary">Stop watching tutorials. Start building real, deployable enterprise applications that employers actually want.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((proj, idx) => (
                        <div className="project-card glass-card animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }} key={idx}>
                            <div className="project-header">
                                <div className="project-icon-wrapper">
                                    {proj.icon}
                                </div>
                                <span className="project-category">{proj.category}</span>
                            </div>
                            <h3 className="project-title">{proj.title}</h3>
                            <p className="project-desc text-secondary">{proj.description}</p>
                            <div className="project-tech">
                                {proj.tech.map((tech, i) => (
                                    <span className="tech-badge" key={i}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
