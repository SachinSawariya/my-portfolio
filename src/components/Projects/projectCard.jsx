import React from "react";
import "./Project.css";

function ProjectCard({ data }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        {data.imgUrl && (
          <img
            src={data.imgUrl}
            alt={data.title}
            className="project-image"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="project-overlay">
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore Project
            </a>
          )}
        </div>
      </div>
      <div className="project-data">
        <h2 className="project-title">{data.title}</h2>
        <div className="project-tags">
          {data.tags && data.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
        <p className="project-description">{data.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
