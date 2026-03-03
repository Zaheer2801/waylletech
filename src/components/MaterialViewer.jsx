import React from 'react';
import { Download, MonitorPlay } from 'lucide-react';
import './MaterialViewer.css';

const MaterialViewer = ({ dayData }) => {
    if (!dayData) return (
        <div className="material-viewer-container empty-state">
            <div className="empty-message">
                <MonitorPlay size={48} className="empty-icon" />
                <h3>Select a Topic</h3>
                <p>Click on any syllabus item to preview the course material.</p>
            </div>
        </div>
    );

    const { core, practice, prep, actualContent } = dayData;
    const title = core;
    const points = [
        `Core Teaching (2h): ${core}`,
        `Practice Session (5h): ${practice}`,
        `Interview Prep (1h): ${prep}`
    ];

    return (
        <div className="material-viewer-container">
            <div className="material-header">
                <div className="material-tabs">
                    <div className="tab active">Syllabus Preview</div>
                </div>
                <div className="material-actions">
                    <button className="btn-icon" title="Download Material"><Download size={20} /></button>
                </div>
            </div>

            <div className="material-body-wrapper">
                <div className="material-content unified-view">
                    <h1 className="unified-title">{title}</h1>

                    {actualContent ? (
                        <div className="unified-section">
                            <h3 className="section-heading">Module Overview</h3>
                            <blockquote className="unified-extract">
                                <i>{actualContent}</i>
                            </blockquote>
                        </div>
                    ) : (
                        <div className="unified-section">
                            <h3 className="section-heading">Module Overview</h3>
                            <p className="unified-paragraph">In this module, we explore the core concepts of {title}. You will learn how to implement these in real-world scenarios through extensive practice.</p>
                        </div>
                    )}

                    <div className="unified-section">
                        <h3 className="section-heading">Daily Breakdown</h3>
                        <ul className="unified-points">
                            {points.map((pt, i) => (
                                <li key={i}>
                                    <span className="point-bullet"></span>
                                    <span className="point-text">{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="material-footer">
                <span>&copy; {new Date().getFullYear()} WAYLLE TECH. way to learn levelup excel in technology.</span>
            </div>
        </div>
    );
};

export default MaterialViewer;
