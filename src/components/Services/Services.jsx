import React from "react";
import "./services.css";
import Resume from "../../img/SachinKumar_resume.pdf";

const skillsData = [
  {
    title: "Front-End",
    icon: "🎨",
    tech: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"]
  },
  {
    title: "Back-End",
    icon: "⚙️",
    tech: ["Node.js", "Express.js", "Nest.js"]
  },
  {
    title: "Database",
    icon: "🗄️",
    tech: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    title: "Languages",
    icon: "💻",
    tech: ["JavaScript", "Python", "C++"]
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    tech: ["Git", "Docker", "AWS", "GitLab CI"]
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    tech: ["RAG", "OpenAI APIs", "Vector Databases", "LangChain"]
  }
];

function Services() {
  return (
    <section className="skills-section" id="Services">
      <div className="skills-container">
        
        <div className="skills-left">
          <div className="skills-heading-wrapper">
            <h2 className="section-title">My <br/><span className="highlight">Expertise</span></h2>
          </div>
          <p className="skills-desc">
            I architect and develop robust web applications from the ground up, bridging the gap between pixel-perfect front-end design and complex backend architecture.
          </p>
          <p className="skills-desc">
            By leveraging modern frameworks and integrating cutting-edge AI technologies, I deliver highly scalable, performant solutions that drive real business impact.
          </p>
          <a href={Resume} download>
            <button className="download-cv-btn">Download CV</button>
          </a>
        </div>

        <div className="skills-right">
          <div className="skills-grid-2col">
            {skillsData.map((skill, index) => (
              <div className="skill-card-modern" key={index}>
                <h3 className="skill-card-title">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.title}
                </h3>
                <div className="skill-tags">
                  {skill.tech.map((t, i) => (
                    <span className="skill-tag" key={i}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Services;
