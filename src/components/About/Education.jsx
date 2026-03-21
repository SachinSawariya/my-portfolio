import React, { useState } from "react";
import "./Education.css";
import { education } from "./aboutData";
import EduIcon from "../../img/education_icon.png";

const Education = () => {
  const tabs = ["Masters", "Bachelors"];
  const [activeTab, setActiveTab] = useState("Masters");

  const getFilteredEducation = () => {
    if (activeTab === "Masters") {
      return education.filter(edu => edu.degree.toLowerCase().includes("master"));
    }
    if (activeTab === "Bachelors") {
      return education.filter(edu => edu.degree.toLowerCase().includes("bachelor"));
    }
    return []; // Others
  };

  const filteredEdu = getFilteredEducation();

  return (
    <section className="education" id="Education">
      <div className="edu-left">
        <h1>Educational <br /><span>Background</span></h1>
        <div className="edu-logo">
          <img src={EduIcon} alt="Education Icon" />
        </div>
      </div>

      <div className="edu-right">
        <div className="edu-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`edu-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="edu-content">
          {filteredEdu.length > 0 ? (
            filteredEdu.map((edu, i) => (
              <div className="education-card active-edu-card" key={i}>
                <div className="edu-card-header">
                  <h2>{edu.degree}</h2>
                  <span className="edu-institution">{edu.institution}</span>
                  <span className="edu-year">Year of Passing: {edu.year}</span>
                </div>
                <p className="edu-description">{edu.description}</p>
              </div>
            ))
          ) : (
            <div className="education-card active-edu-card empty-edu">
              <p>No records found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
