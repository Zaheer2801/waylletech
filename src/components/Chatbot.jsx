import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import './Chatbot.css';

const initialMessages = [
    { id: 1, text: "Hi there! I'm the WAYLLE Bot. How can I help you level up your tech skills today?", sender: 'bot' }
];

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages((prev) => [...prev, newUserMsg]);
        setInputValue('');
        setIsTyping(true);

        // Mock AI response logic
        setTimeout(() => {
            let botResponse = "I'm a demo bot, but our admission team would love to answer that! Feel free to use the Contact form or Enroll Now.";

            const lowerInput = newUserMsg.text.toLowerCase();
            if (lowerInput.includes('price') || lowerInput.includes('cost')) {
                botResponse = "The 45-day Full Stack Bootcamp is an intensive, premium program. Please use the Contact form so our admissions team can send you the full pricing details and available scholarships.";
            } else if (lowerInput.includes('duration') || lowerInput.includes('how long')) {
                botResponse = "The bootcamp is exactly 45 days. It's a rigorous, intensive program designed to take you from a beginner to job-ready very quickly.";
            } else if (lowerInput.includes('syllabus') || lowerInput.includes('curriculum') || lowerInput.includes('learn')) {
                botResponse = "We cover everything from HTML/CSS to advanced React, Node.js, and Databases. You can check out the full curriculum in the Syllabus section on this page!";
            } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                botResponse = "Hello! Ready to start your coding journey?";
            } else if (lowerInput.includes('remote') || lowerInput.includes('online')) {
                botResponse = "Yes! The entire 45-day bootcamp can be taken completely online with live instruction.";
            }

            setMessages((prev) => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
            {/* Floating Action Button */}
            <button
                className="chatbot-toggle-btn shadow-lg"
                onClick={handleToggle}
                aria-label="Toggle chat"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            {/* Chat Window */}
            <div className={`chat-window glass-card ${isOpen ? 'visible' : ''}`}>
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="bot-avatar-bg">
                            <Bot size={20} className="text-primary" />
                        </div>
                        <div>
                            <h3 className="chat-title">WAYLLE Bot</h3>
                            <span className="chat-status">Online • Answers instantly</span>
                        </div>
                    </div>
                    <button className="chat-close-btn" onClick={handleToggle}>
                        <X size={20} />
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`chat-message-row ${msg.sender}`}>
                            {msg.sender === 'bot' && (
                                <div className="chat-avatar bot">
                                    <Bot size={14} />
                                </div>
                            )}
                            <div className={`chat-bubble ${msg.sender}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="chat-message-row bot">
                            <div className="chat-avatar bot">
                                <Bot size={14} />
                            </div>
                            <div className="chat-bubble bot typing">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chat-input-area" onSubmit={handleSend}>
                    <input
                        type="text"
                        className="chat-input"
                        placeholder="Ask a question..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;
