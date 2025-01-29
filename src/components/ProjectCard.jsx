import React from "react";
import "./ProjectCard.css"; // Import the CSS file

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <div id="tituloCard">
        <h3>{title}</h3>
      </div>

      {/* Display image if provided */}
      {image && <img src={image} alt={"image"} />}
      <div id="desc">
        <p>{description}</p>
      </div>

      {/* Link styled as a button */}
      <a href={link} className="project-card-link">
        Ver mais
      </a>
    </div>
  );
};

export default ProjectCard;
