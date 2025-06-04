import "./ProjectCard.css";
import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ title, description, image, github, demo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (demo) {
      setIsModalOpen(true);
    } else if (github) {
      window.open(github, "_blank");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="project-card-link-wrapper" onClick={handleClick}>
        <div className="project-card">
          {image && <img src={image} alt="image" />}
          <div id="tituloCard">
            <h3>{title}</h3>
          </div>
          <div id="desc">
            <p>{description}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Links do Projeto</h3>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Ver Demo
            </a>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string,
};

export default ProjectCard;
