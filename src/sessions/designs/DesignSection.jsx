import React from "react";
import DesignCard from "../../components/designCard/DesignCard";
import "./DesignSection.css"; // Import the CSS file
import designPreview1 from "../../assets/designs/designPreview1.png";
import designFull1 from "../../assets/designs/designFull1.png";
import designPreview2 from "../../assets/designs/designPreview2.png";
import designFull2 from "../../assets/designs/designFull2.png";

const DesignSection = () => {
  const projects = [
    {
      title: "Design de uma loja virtual de produtos eletrônicos",
      preview: designPreview1,
      desc: "Produzido por mim, para fins de estudo. Possui todos os vários elementos básicos que uma loja virtual de eletrônicos necessita.",
      image: designFull1,
    },
    {
      title: "Design de um blog sobre tecnologia",
      preview: designPreview2,
      desc: "Produzido por mim, para fins de estudo. Possui todos os elementos básicos que um blog necessita.",
      image: designFull2,
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
