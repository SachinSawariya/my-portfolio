import React from "react";
import "./Project.css";
import "swiper/css";
import ProjectCard from "./projectCard";
import { projectData } from "./projectList";

function Project() {
  return (
    <div className="portfolio" id="Projects">
      <span> Recent Projects </span>
      <div className="project-div">
        {projectData.map((data) => (
          <ProjectCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default Project;
