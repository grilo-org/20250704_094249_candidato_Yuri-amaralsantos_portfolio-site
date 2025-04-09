import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      className="project-card-link-wrapper"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-card">
        {image && <img src={image} alt="image" />}
        <div id="tituloCard">
          <h3>{title}</h3>
        </div>
        <div id="desc">
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
