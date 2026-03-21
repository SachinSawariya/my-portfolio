import React, { useState } from "react";
import "./Experience.css";
import { experiences } from "./aboutData";
import ExpIcon from "../../img/experience_icon.png";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(experiences[0]);

  return (
    <section className="experience" id="Experience">
      <div className="exp-left">
        <h1>Work <span>Experience</span></h1>
        <div className="exp-logo">
          <img src={ExpIcon} alt="Experience Icon" />
        </div>
      </div>

      <div className="exp-right">
        <div className="exp-tabs">
          {experiences.map((exp, i) => (
            <button
              key={i}
              className={`exp-tab ${selectedExp.duration === exp.duration ? "active" : ""}`}
              onClick={() => setSelectedExp(exp)}
            >
              {exp.duration}
            </button>
          ))}
        </div>

        <div className="experience-card active-exp-card">
          <div className="exp-card-header">
            <h2>{selectedExp.role}</h2>
            <span className="exp-company">{selectedExp.company}</span>
          </div>
          <ul className="exp-points">
            {selectedExp.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
