import React from "react";
import DesignCard from "../../components/designCard/DesignCard";
import designs from "../../data/designs.json";
import "./designs.css";

const Designs = () => {
  return (
    <main>
      <div id="todos-projetos">
        {designs.map((design, index) => (
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
    </main>
  );
};

export default Designs;
