import React from "react";
import "./Project.css";

function ProjectCard({ data, index, total }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        {data.imgUrl ? (
          <img
            src={data.imgUrl}
            alt={data.title}
            className="project-image"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-image-placeholder">No Image Available</div>
        )}
        <div className="card-fraction-badge">
          {index} / {total}
        </div>
        <div className="project-overlay">
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          )}
        </div>
      </div>
      <div className="project-data">
        <h3 className="project-title">{data.title}</h3>
        <p className="project-description">{data.description}</p>
        <div className="project-tags">
          {data.tags && data.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
