import React from "react";
import "./About.css";
import my_pic from "./sachin_pics.png";

function About() {
  return (
    <section className="about-section" id="About" aria-label="About Section">
      <div className="about-container">
        
        <div className="about-left">
          <div className="image-wrapper">
            <div className="image-bg-blob"></div>
            <img src={my_pic} alt="Sachin Kumar" className="about-img" />
            <div className="experience-badge">
              <span className="exp-number">2+</span>
              <span className="exp-text">Years of<br/>Experience</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-heading">
            <h4 className="section-subtitle">Discover</h4>
            <h2 className="section-title">About <span className="highlight">Me</span></h2>
          </div>
          
          <div className="about-description">
            <p>
              I am a <strong>Full Stack Software Engineer</strong> who loves bridging the gap between 
              backend architecture and frontend user experience. I specialize in the <strong>MERN stack</strong>, 
              building scalable and resilient applications from the ground up.
            </p>
            <p>
              Whether it's designing complex databases, securing API endpoints, or crafting 
              pixel-perfect UI components, I focus on delivering production-ready solutions 
              that drive real business value.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">2+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
