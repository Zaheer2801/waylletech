import React from 'react';
import { Clock, BookOpen, Coffee, Code2, PenTool, LayoutTemplate } from 'lucide-react';
import './Schedule.css';

const scheduleData = [
    {
        time: "09:00 AM - 11:00 AM",
        title: "Morning Learning Session",
        description: "Deep dive into new concepts and technologies for the day.",
        icon: <BookOpen className="schedule-icon" />,
        type: "learning"
    },
    {
        time: "11:00 AM - 11:30 AM",
        title: "Short Break",
        description: "Recharge and refresh before practice.",
        icon: <Coffee className="schedule-icon" />,
        type: "break"
    },
    {
        time: "11:30 AM - 01:00 PM",
        title: "Practice Session 1",
        description: "Hands-on implementation of morning concepts.",
        icon: <Code2 className="schedule-icon" />,
        type: "practice"
    },
    {
        time: "01:00 PM - 02:00 PM",
        title: "Lunch Break",
        description: "Time to eat, relax, and step away from the screen.",
        icon: <Coffee className="schedule-icon" />,
        type: "break"
    },
    {
        time: "02:00 PM - 04:30 PM",
        title: "Scenario-Driven Practice",
        description: "Intense practice on morning sessions involving various projects, 6+ real-world scenarios, and complex use cases.",
        icon: <LayoutTemplate className="schedule-icon" />,
        type: "practice-heavy"
    },
    {
        time: "04:30 PM - 05:00 PM",
        title: "Snack Break",
        description: "Quick energy boost before the final challenge.",
        icon: <Coffee className="schedule-icon" />,
        type: "break"
    },
    {
        time: "05:00 PM - 06:00 PM",
        title: "Cumulative Daily Test",
        description: "Rigorous assessment covering today's concepts AND all previous topics. Gets tougher every single day.",
        icon: <PenTool className="schedule-icon" />,
        type: "test"
    }
];

const Schedule = () => {
    return (
        <section className="schedule-section section-padding" id="schedule">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="heading-md">Rigorous <span className="text-gradient">Daily Schedule</span></h2>
                    <p className="text-secondary">A highly structured 9 AM to 6 PM routine designed to maximize learning, practice, and retention.</p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {scheduleData.map((item, index) => (
                        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                            <div className="timeline-content glass-card">
                                <div className={`timeline-badge ${item.type}`}>
                                    {item.icon}
                                </div>
                                <div className="timeline-time">
                                    <Clock size={16} />
                                    <span>{item.time}</span>
                                </div>
                                <h3 className="heading-sm">{item.title}</h3>
                                <p className="text-secondary">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
