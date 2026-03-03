import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/zshaik2801@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                setFormStatus('idle');
            }
        } catch (error) {
            console.error(error);
            setFormStatus('idle');
        }

        setTimeout(() => setFormStatus('idle'), 3000);
    };

    return (
        <section className="contact-section section-padding" id="contact">
            <div className="container">
                <div className="contact-grid">

                    <div className="contact-info">
                        <h2 className="heading-md mb-4">Get in Touch <br />with <span className="text-gradient">WAYLLE TECH</span></h2>
                        <p className="text-secondary mb-8">
                            Ready to start your journey? Have questions about our rigorous 45-day curriculum? We are here to help you level up and excel.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <span className="detail-label">Email</span>
                                <span className="detail-value text-primary">hello@waylletech.com</span>
                            </div>
                            <div className="contact-detail-item">
                                <span className="detail-label">Phone</span>
                                <span className="detail-value text-primary">+1 (555) 123-4567</span>
                            </div>
                            <div className="contact-detail-item">
                                <span className="detail-label">Location</span>
                                <span className="detail-value text-primary">San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-card">
                        <h3 className="heading-sm mb-4">Send us a message</h3>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" rows="4" required placeholder="How can we help you?"></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary w-full ${formStatus === 'submitting' ? 'loading' : ''}`}
                                disabled={formStatus !== 'idle'}
                            >
                                {formStatus === 'idle' && <><Send size={18} /> Send Message</>}
                                {formStatus === 'submitting' && 'Sending...'}
                                {formStatus === 'success' && 'Message Sent!'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
