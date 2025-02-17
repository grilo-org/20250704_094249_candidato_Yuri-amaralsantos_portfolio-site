import React, { useState } from "react";
import "./DesignCard.css"; // Import the CSS file

const DesignCard = ({ title, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="project-card">
      <div id="tituloCard">
        <h3>{title}</h3>
      </div>

      {/* Display image if provided */}
      {image && (
        <>
          <img src={image} alt="Preview" />
          <button onClick={() => setIsModalOpen(true)} className="modal-button">
            View Image
          </button>
        </>
      )}

      {/* Modal for displaying the image */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <img src={image} alt="Full View" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignCard;
