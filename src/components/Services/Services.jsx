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
          Build scalable, high-performance web applications by combining intuitive UI with robust backend architecture.
        </p>
        <p>
          Develop fast, responsive, and SEO-friendly solutions using the MERN stack and Next.js that deliver real business value.
        </p>
        <p>
          Deliver end-to-end solutions including APIs, integrations, database optimization, and secure deployments focused on performance and scalability.
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
            detail={"Html, CSS, Next Js, React Js, Angular, Tailwind, Bootstrap"}
          />
        </div>

        {/* Second cards */}
        <div style={{ left: "0rem", top: "15rem" }}>
          <Card
            emoji={Glasses}
            heading={"Programming Language"}
            detail={"C++, Javascript, Python, Data Structures"}
          />
        </div>

        {/* third card */}
        <div style={{ left: "30rem", top: "15rem" }}>
          <Card
            emoji={Glasses}
            heading={"Additional Skills"}
            detail={"GRPC, Git, GitLab, Docker"}
          />
        </div>
        {/* fourth card */}
        <div style={{ left: "30rem", top: "-6rem" }}>
          <Card
            emoji={Glasses}
            heading={"Back-End Technologies"}
            detail={"Node JS, Express, Nest Js,  Next Js"}
          />
        </div>

        {/* fifth card */}
        <div style={{ left: "15rem", top: "5rem" }}>
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
