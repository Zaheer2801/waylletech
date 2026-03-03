import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Eye } from 'lucide-react';
import MaterialViewer from './MaterialViewer';
import { dynamicSyllabus } from '../data/syllabusData';
import './Syllabus.css';

const Syllabus = () => {
  const [activeMaterial, setActiveMaterial] = useState(null); // { dayData: {} }
  const [expandedWeeks, setExpandedWeeks] = useState({ 'Week 1: HTML, CSS & Responsive Design': true });

  const handleOpenMaterial = (dayData) => {
    setActiveMaterial({ dayData });
  };

  const toggleWeek = (weekName) => {
    setExpandedWeeks(prev => ({
      ...prev,
      [weekName]: !prev[weekName]
    }));
  };

  return (
    <section className="syllabus-section section-padding" id="syllabus">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-md">Detailed <span className="text-gradient">45-Day Curriculum</span></h2>
          <p className="text-secondary">Explore the immersive 45-day syllabus. Select a topic to preview the material.</p>
        </div>

        <div className="syllabus-split-layout">

          {/* LEFT: Accordion List */}
          <div className="syllabus-list-pane">
            {dynamicSyllabus.map((phaseData, pIdx) => (
              <div className="phase-block" key={pIdx}>
                <h3 className="phase-title text-gradient">{phaseData.phase}</h3>

                {phaseData.weeks.map((weekData, wIdx) => {
                  const isExpanded = expandedWeeks[weekData.weekName];
                  return (
                    <div className="week-block glass-card" key={wIdx}>
                      <div className="week-header" onClick={() => toggleWeek(weekData.weekName)}>
                        <h4 className="week-title">{weekData.weekName}</h4>
                        {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      </div>

                      {isExpanded && (
                        <div className="days-list">
                          {weekData.days.map((dayObj, dIdx) => (
                            <div
                              className={`day-item ${activeMaterial?.dayData?.dayNumber === dayObj.dayNumber ? 'active-day' : ''}`}
                              key={dIdx}
                              onClick={() => handleOpenMaterial(dayObj)}
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="day-info">
                                <span className="day-badge">{dayObj.dayNumber}</span>
                                <h5 className="day-core">{dayObj.core}</h5>
                              </div>

                              <div className="day-actions">
                                <div className="mini-btn preview-btn" title="Preview Topic">
                                  <Eye size={14} /> Preview
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* RIGHT: Material Viewer Pane */}
          <div className="syllabus-viewer-pane">
            <MaterialViewer dayData={activeMaterial?.dayData} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Syllabus;
