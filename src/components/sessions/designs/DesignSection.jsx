import React from "react";
import DesignCard from "./DesignCard";
import "./DesignSection.css"; // Import the CSS file
import designPreview1 from "../../../assets/designs/designPreview1.png";
import designFull1 from "../../../assets/designs/designFull1.png";
import rectangle from "../../../assets/rectangle.png";

const DesignSection = () => {
  const projects = [
    {
      title: "Design de uma loja virtual de produtos eletrônicos",
      preview: designPreview1,
      desc: "Produzida por mim, para fins de estudo. Possui todos os vários elementos que uma loja virtual de eletrônicos necessita.",
      image: designFull1,
    },
  ];

  return (
    <section>
      <h2>Design</h2>
      <div id="design">
        {projects.map((project, index) => (
          <div>
            <DesignCard
              key={index}
              title={project.title}
              image={project.image}
              preview={project.preview}
              desc={project.desc}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignSection;
