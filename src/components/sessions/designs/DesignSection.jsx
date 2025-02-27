import React from "react";
import DesignCard from "./DesignCard";
import "./DesignSection.css"; // Import the CSS file
import design1 from "../../../assets/site1.png";
import rectangle from "../../../assets/rectangle.png";

const DesignSection = () => {
  const projects = [
    {
      title: "em desenvolvimento",
      preview: rectangle,
      desc: "em desenvolvimento",
      image: rectangle,
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
