import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css"; // Import the CSS file
import project1 from "../assets/site1.png";
import rectangle from "../assets/rectangle.png";
import project2 from "../assets/site2.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portifolio",
      description: "Portfolio pessoal construido utilizando react.",
      image: project1, // Example image URL
      link: "https://github.com/Yuri-amaralsantos/portfolio-site", // Example link
    },
    {
      title: "Learn Notes",
      description:
        "Um aplicativo web desenvolvido em React que permite criar e organizar suas anotações de forma prática.",
      image: project2, // Example image URL
      link: "https://wiki-study-app-polo.vercel.app", // Example link
    },
    {
      title: "Em desenvolvimento",
      description: "Em desenvolvimento",
      image: rectangle, // Example image URL
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
