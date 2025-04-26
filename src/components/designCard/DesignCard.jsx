import React, { useState, useEffect } from "react";
import "./DesignCard.css";

const DesignCard = ({ title, image, preview, desc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="design-container">
        <div className="design-card" onClick={openModal}>
          {image && <img src={preview} alt="Preview" className="preview" />}
          <h3>{title}</h3>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                ×
              </button>
              <h2>{title}</h2>
              <p>{desc}</p>
              <img className="fullImage" src={image}></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DesignCard;
