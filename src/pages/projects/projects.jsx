import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import projects from "../../data/projects.json";
import "./projects.css";

const Project = () => {
  return (
    <main>
      <div id="todos-projetos">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
};

export default Project;
