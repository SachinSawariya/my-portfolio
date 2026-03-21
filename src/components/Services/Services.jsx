import React from "react";
import "./services.css";
import Glasses from "../../img/glasses.png";
import Card from "./Card";
import Resume from "../../img/SachinKumar_resume.pdf";

function Services() {
  return (
    <div className="services" id="Services">
      <div className="s-left">
        <h1>My <span>Services</span></h1>
        <p>
          I deliver high-performance, scalable web solutions by bridging the gap between 
          stunning design and robust back-end architecture.
        </p>
        <p>
          Specializing in the <strong>MERN stack</strong> and modern frameworks like <strong>Next.js</strong>, 
          I build responsive UIs that are as functional as they are beautiful.
        </p>
        <p>
          From seamless API integrations to secure cloud deployments and database optimization, 
          I ensure every digital product is built for speed, security, and impact.
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
