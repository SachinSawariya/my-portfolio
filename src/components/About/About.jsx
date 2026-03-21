import React from "react";
import "./About.css";
import my_pic from "./About_pic.png";

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
      </article>
    </section>
  );
}

export default About;
