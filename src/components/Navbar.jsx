import React, { useState, useEffect } from 'react';
import { ChevronRight, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ introDone }) => {
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${introDone ? 'nav-visible' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="nav-logo">
                    WAYLLE TECH
                </a>

                <div className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#curriculum" className="nav-link">Curriculum</a>
                    <a href="#schedule" className="nav-link">Schedule</a>
                    <a href="#syllabus" className="nav-link">Syllabus</a>
                    <a href="#contact" className="nav-link">Contact</a>

                    <button onClick={toggleTheme} className="theme-toggle-btn nav-link" aria-label="Toggle theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <a href="#contact" className="btn btn-primary nav-btn enroll-btn">
                        Enroll Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
