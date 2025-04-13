import React from "react";
import "./Project.css";

function ProjectCard({ data }) {
  return (
    <div className="project-card">
      {data.imgUrl && (
        <img src={data.imgUrl} alt={data.title} className="project-image" />
      )}
      <div className="project-data">
        <h2 className="project-title">{data.title}</h2>
        <p className="project-description">{data.description}</p>
        <div className="project-url">
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
