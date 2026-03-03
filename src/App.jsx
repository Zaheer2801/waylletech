import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Schedule from './components/Schedule';
import Curriculum from './components/Curriculum';
import Features from './components/Features';
import Projects from './components/Projects';
import Instructors from './components/Instructors';
import Syllabus from './components/Syllabus';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const [introDone, setIntroDone] = useState(false);
  const [exploreMode, setExploreMode] = useState(false);

  const handleExplore = () => {
    setExploreMode(true);
    setTimeout(() => {
      document.getElementById('bootcamp-hero').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="app-container">
      {/* Intro Animation Layer */}
      {!introDone && <Intro onIntroComplete={() => setIntroDone(true)} />}

      {/* Main Layout (Visible once intro passes navigation to corner) */}
      <div className={`main-layout ${introDone ? 'visible' : ''}`}>
        <Navbar introDone={introDone} />

        <main>
          {/* Always show About first */}
          <About onExplore={handleExplore} />

          {/* Reveal details on Explore Click */}
          {exploreMode && (
            <div className="bootcamp-details fade-in-section">
              {/* Hero Section */}
              <section className="hero" id="bootcamp-hero">
                <div className="container">
                  <div className="hero-content">
                    <span className="hero-subtitle animate-fade-up">Pro-Level Engineering</span>
                    <h1 className="heading-xl animate-fade-up delay-100">
                      Master <span className="glass-shine-text">Full Stack</span>. <br />
                      Built for serious growth.
                    </h1>
                    <p className="hero-description animate-fade-up delay-200">
                      Transform from beginner to job-ready developer in 45 rigorous days. Teach, Train, and Deploy. We focus on real-world scenarios and relentless practice.
                    </p>
                    <div className="hero-actions animate-fade-up delay-300">
                      <button className="btn btn-primary" onClick={() => document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' })}>
                        View Curriculum
                      </button>
                      <button className="btn btn-secondary" onClick={() => document.getElementById('syllabus').scrollIntoView({ behavior: 'smooth' })}>
                        Explore Syllabus <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <Features />

              {/* Projects Showcase */}
              <Projects />

              {/* Instructors Section */}
              <Instructors />

              {/* Curriculum Section */}
              <div id="curriculum">
                <Curriculum />
              </div>

              {/* Schedule Section */}
              <Schedule />

              {/* Syllabus & Materials Section */}
              <Syllabus />

              {/* Contact Section */}
              <Contact />
            </div>
          )}
        </main>

        <footer className="footer-section">
          <div className="container text-center">
            <h2 className="heading-sm mb-4">Join the Waitlist</h2>
            <p className="text-secondary mb-6 mx-auto" style={{ maxWidth: '500px' }}>
              Spots for the next cohort are highly limited. Enter your email to receive early access and secure your place.
            </p>
            <form className="newsletter-form mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining! We'll be in touch soon."); }}>
              <input type="email" placeholder="hello@example.com" required className="newsletter-input" />
              <button type="submit" className="btn btn-primary subscribe-btn">Subscribe</button>
            </form>
            <div className="footer-bottom text-secondary mt-12">
              &copy; {new Date().getFullYear()} WAYLLE TECH. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;
