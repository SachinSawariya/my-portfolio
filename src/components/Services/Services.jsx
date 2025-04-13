import React from "react";
import "./services.css";
import Glasses from "../../img/glasses.png";
import Card from "./Card";
import Resume from "../../img/SachinKumar_resume.pdf";
function Services() {
  return (
    <div className="services" id="Services">
      <div className="s-left">
        <span>My Services</span>
        <p>
          I offer end-to-end web development services, combining design,
          front-end, and back-end expertise to deliver complete, scalable
          solutions.
        </p>
        <p>
          I specialize in building responsive user interfaces with modern
          technologies like React, Next.js, while also developing secure and
          efficient server-side systems using Node.js and Express.
        </p>
        <p>
          Whether it’s database management, API integration, or deployment
          automation, I ensure performance, security, and a seamless user
          experience in every project.
        </p>
        <a href={Resume} download>
          <button className="button s-btn">Download CV</button>
        </a>
      </div>

      {/* //right side */}
      <div className="cards">
        <div style={{ left: "0rem", top: "-6rem" }}>
          <Card
            emoji={Glasses}
            heading={"Front-End Technologies"}
            detail={"Html, CSS, React Js, Tailwind CSS, Bootstrap"}
          />
        </div>

        {/* Second cards */}
        <div style={{ left: "0rem", top: "13rem" }}>
          <Card
            emoji={Glasses}
            heading={"Programming Language"}
            detail={"C++, Javascript, Python, Data Structures"}
          />
        </div>

        {/* third card */}
        <div style={{ left: "28rem", top: "13rem" }}>
          <Card
            emoji={Glasses}
            heading={"Additional Skills"}
            detail={"Git, GitLab, Docker"}
          />
        </div>
        {/* fourth card */}
        <div style={{ left: "28rem", top: "-6rem" }}>
          <Card
            emoji={Glasses}
            heading={"Back-End Technologies"}
            detail={"Node JS, Express, Nest Js,  Next Js"}
          />
        </div>

        {/* fifth card */}
        <div style={{ left: "14rem", top: "3.5rem" }}>
          <Card
            emoji={Glasses}
            heading={"Database Management"}
            detail={"MySQL, MongoDB, Postgress Sql"}
          />
        </div>
        <div
          className="blur s-blur"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
