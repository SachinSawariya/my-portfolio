import React from "react";
import "./Education.css";
import { education } from "./aboutData";
import EduIcon from "../../img/education_icon.png";

const Education = () => {
  return (
    <section className="education-section" id="Education">
      <div className="edu-container">
        <div className="edu-left">
          <div className="edu-heading-wrapper">
            <h2 className="section-title">My <br/><span className="highlight">Education</span></h2>
          </div>
          <div className="edu-logo">
            <img src={EduIcon} alt="Education Icon" />
          </div>
        </div>
        
        <div className="edu-right">
          <div className="edu-timeline">
            {education.map((edu, index) => (
              <div className="edu-timeline-item" key={index}>
                <div className="edu-timeline-dot"></div>
                <div className="edu-timeline-content">
                  <div className="edu-card-top">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <span className="edu-year">{edu.year}</span>
                  </div>
                  <h4 className="edu-institution">{edu.institution}</h4>
                  <p className="edu-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
