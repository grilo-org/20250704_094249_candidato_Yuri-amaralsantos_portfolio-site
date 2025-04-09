import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./ProjectSection.css";
import projects from "../../data/projects.json";

const ProjectsSection = () => {
  return (
    <section>
      <h2>Projetos</h2>
      <div id="projetos">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image} // Caminho direto da imagem no public
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
