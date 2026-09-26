import React, { useState } from "react";
import "./Experience.css";
import { experiences } from "./aboutData";

const Experience = () => {
  const [activeExpIndex, setActiveExpIndex] = useState(0);

  return (
    <section className="experience-section" id="Experience">
      <div className="exp-container">
        <div className="exp-heading-wrapper">
          <h2 className="section-title">Where I've <span className="highlight">Worked</span></h2>
        </div>

        <div className="exp-content">
          <div className="exp-tab-list" role="tablist" aria-label="Work Experience Tabs">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                role="tab"
                aria-selected={activeExpIndex === index}
                id={`tab-${index}`}
                aria-controls={`panel-${index}`}
                className={`exp-tab-btn ${activeExpIndex === index ? "active" : ""}`}
                onClick={() => setActiveExpIndex(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="exp-panels">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                id={`panel-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
                className={`exp-panel ${activeExpIndex === index ? "active" : ""}`}
                hidden={activeExpIndex !== index}
              >
                <h3 className="exp-role">
                  {exp.role} <span className="exp-company-name">@ {exp.company}</span>
                </h3>
                <p className="exp-duration">{exp.duration}</p>
                {exp.project && (
                  <div className="exp-projects">
                    <strong>Projects:</strong>
                    <div className="project-tags">
                      {exp.project.split(',').map((p) => (
                        <span key={p.trim()} className="project-tag">{p.trim()}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <ul className="exp-duties">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
