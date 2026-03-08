import React, { useState } from "react";
import "./About.css";
import my_pic from "./About_pic.jpeg";
import { experiences } from "./aboutData";
import { education } from "./aboutData";

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="about" id="About" aria-label="About Section">
      <div className="a-left">
        <div className="a-image">
          <img
            src={my_pic}
            alt="Sachin Kumar - Professional Headshot"
            style={{ width: "21rem", height: "28rem" }}
          />
        </div>
      </div>

      <article className="a-right">
        <header>
          <h1 className="sub-title"> About Me.</h1>
        </header>
        <div className="about-content">
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
            scalability—I’m all in.
          </p>
          <p>Let’s build something amazing together!</p>
        </div>

        <nav className="tab-titles" aria-label="Experience and Education Tabs">
        <button
            className={activeTab === "experience" ? "active-tab" : ""}
            onClick={() => setActiveTab("experience")}
            aria-pressed={activeTab === "experience"}
          >
            Experience
          </button>
          <button
            className={activeTab === "education" ? "active-tab" : ""}
            onClick={() => setActiveTab("education")}
            aria-pressed={activeTab === "education"}
          >
            Education
          </button>
        </nav>

        <div className="tab-content" role="tabpanel">
          {activeTab === "education" && (
            <>
              <div className="education-details" >
                {education.map((edu, i) => (
                  <article className="education-card" key={i}>
                    <h2>{edu.degree}</h2>
                    <span>{edu.institution}</span>
                    <p className="education-duration">Year of Passing: {edu.year}</p>
                    <p>{edu.description}</p>

                  </article>
                ))}
              </div>
            </>
          )}
        </div>
        {activeTab === "experience" && (
          <div className="experience-details" role="tabpanel">
            {experiences.map((exp, i) => (
              <article className="experience-card" key={i}>
                <h2>{exp.role}</h2>
                <span>{exp.company}</span>
                <p className="experience-duration">{exp.duration}</p>
                <ul className="experience-points">
                  {exp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </article>
    </section>
  );
}

export default About;
