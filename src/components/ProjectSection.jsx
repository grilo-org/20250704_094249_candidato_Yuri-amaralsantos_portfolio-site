import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css"; // Import the CSS file
import rectangleImage from "../assets/rectangle.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portifolio",
      description: "Portfolio pessoal construido utilizando react",
      image: rectangleImage, // Example image URL
      link: "https://github.com/Yuri-amaralsantos/unityJogoEducativo", // Example link
    },
    {
      title: "Em desenvolvimento",
      description: "Em desenvolvimento",
      image: rectangleImage, // Example image URL
      link: "#development", // Example link
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Projetos</h2>
      <div id="projetos">
        {projects.map((project, index) => (
          <ProjectCard
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

export default ProjectsSection;
