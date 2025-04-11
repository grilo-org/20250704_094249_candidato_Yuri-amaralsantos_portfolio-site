import React from "react";
import { Link } from "react-router-dom"; // Importa o Link
import DesignCard from "../../components/designCard/DesignCard";
import "./DesignSection.css";
import designs from "../../data/designs.json";

const DesignSection = () => {
  return (
    <section>
      <h2>Designs</h2>
      <div id="design">
        {designs.slice(0, 3).map((design, index) => (
          <DesignCard
            key={index}
            title={design.title}
            description={design.description}
            preview={design.preview}
            image={design.image}
            link={design.link}
          />
        ))}
      </div>

      {/* Botão Ver Mais */}
      <div className="ver-mais-wrapper">
        <Link to="/designs" className="ver-mais-btn">
          Ver mais designs
        </Link>
      </div>
    </section>
  );
};

export default DesignSection;
