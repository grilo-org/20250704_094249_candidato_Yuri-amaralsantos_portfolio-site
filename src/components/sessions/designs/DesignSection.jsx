import React from "react";
import DesignCard from "./DesignCard";
import "./DesignSection.css"; // Import the CSS file
import project1 from "../../../assets/site1.png";
import rectangle from "../../../assets/rectangle.png";
import project2 from "../../../assets/site2.png";
import project3 from "../../../assets/site3.png";

const DesignSection = () => {
  const projects = [
    {
      title: "Portifolio",
      description: "Portfolio pessoal construido utilizando react.",
      image: project1,
      link: "https://github.com/Yuri-amaralsantos/portfolio-site",
    },
    {
      title: "Em desenvolvimento",
      description: "Em desenvolvimento",
      image: rectangle,
      link: "",
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Design</h2>
      <div id="design">
        {projects.map((project, index) => (
          <DesignCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link} // Pass the link here
          />
        ))}
      </div>
    </section>
  );
};

export default DesignSection;
