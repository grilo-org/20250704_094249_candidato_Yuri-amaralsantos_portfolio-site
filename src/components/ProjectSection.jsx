import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css"; // Import the CSS file
import project1 from "../assets/site1.png";
import rectangle from "../assets/rectangle.png";
import project2 from "../assets/site2.png";
import project3 from "../assets/site3.png";

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
      title: "Chat em Tempo Real",
      description:
        "um aplicativo de chat em tempo real, projetado para facilitar a comunicação dentro de sistemas, com autenticação JWT, WebSockets (Socket.io) e PostgreSQL para gerenciamento de usuários.",
      image: project3, // Example image URL
      link: "https://github.com/Yuri-amaralsantos/javascriptChatApp", // Example link
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
