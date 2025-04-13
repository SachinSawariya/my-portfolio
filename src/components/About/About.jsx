import React, { useState } from "react";
import "./About.css";
import my_pic from "./About_pic.jpeg";
import { experiences } from "./aboutData";
import { education } from "./aboutData";

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="about" id="About">
      <div className="a-left">
        <div className="a-image">
          <img
            src={my_pic}
            alt="Sachin Kumar"
            style={{ width: "21rem", height: "28rem" }}
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="sub-title"> About Me.</h1>
        <p>
          Hi, I’m <span>Sachin Kumar</span>, a passionate MERN Stack Developer
          with a strong foundation in building scalable, high-performance web
          applications. With hands-on experience in developing SaaS platforms
          like the Artha Job Board, I specialize in creating seamless user
          experiences and writing clean, maintainable code.{" "}
        </p>
        <p>
          At Knovator Technology, I’ve worked on impactful features such as
          automated domain configuration, bulk data uploads, and third-party
          integrations including Google Calendar and OAuth. My role bridges both
          development and support, giving me a unique perspective on delivering
          user-focused solutions that are technically sound and easy to
          maintain.
        </p>
        <p>
          I’m constantly exploring new technologies, optimizing backend
          services, and looking for ways to solve real-world problems through
          code. Whether it's performance tuning, API design, or product
          scalability—I'm all in.
        </p>
        <p>Let’s build something amazing together!</p>

        <div className="tab-titles">
        <button
            className={activeTab === "experience" ? "active-tab" : ""}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={activeTab === "education" ? "active-tab" : ""}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "education" && (
            <>
              <div className="education-details" >
                {education.map((edu, i) => (
                  <div className="education-card" key={i}>
                    <h2>{edu.degree}</h2>
                    <span>{edu.institution}</span>
                    <p className="education-duration">Year of Passing: {edu.year}</p>
                    <p>{edu.description}</p>

                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        {activeTab === "experience" && (
          <div className="experience-details">
            {experiences.map((exp, i) => (
              <div className="experience-card" key={i}>
                <h2>{exp.role}</h2>
                <span>{exp.company}</span>
                <p className="experience-duration">{exp.duration}</p>
                <ul className="experience-points">
                  {exp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
