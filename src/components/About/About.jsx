import React from "react";
import "./About.css";
import my_pic from "./sachin_pics.png";

function About() {
  return (
    <section className="about" id="About" aria-label="About Section">
      <div className="a-left">
        <div className="a-image">
          <img
            src={my_pic}
            alt="Sachin Kumar - Professional Headshot"
            className="about-profile-img"
          />
        </div>
      </div>

      <article className="a-right">
        <header>
          <h1 className="sub-title"> About <span>Me.</span></h1>
        </header>
        <div className="about-content">
          <p>
            Hi, I’m <span>Sachin Kumar</span>, a <strong>Software Engineer</strong> and <strong>Full Stack Developer</strong> specializing in building
            scalable, high-performance web applications with clean architecture and seamless user experiences.
          </p>
          <p>
            I focus on developing efficient backend systems, designing responsive frontends, and
            integrating secure APIs to deliver reliable and production-ready solutions.
          </p>
          <p>
            With a strong emphasis on performance, scalability, and maintainability, I aim to create
            solutions that are not only technically sound but also drive real impact.
          </p>
          <p>
            I’m continuously learning and improving, always looking for better ways to solve problems through code.
          </p>
          <p>Let’s build something amazing together!</p>
        </div>
      </article>
    </section>
  );
}

export default About;
