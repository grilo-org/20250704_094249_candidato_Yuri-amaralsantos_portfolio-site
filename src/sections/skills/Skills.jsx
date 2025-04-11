import React from "react";
import "./Skills.css";
import {
  FaNodeJs,
  FaFigma,
  FaReact,
  FaVuejs,
  FaAngular,
  FaLaravel,
} from "react-icons/fa"; // Node.js
import {
  SiTailwindcss,
  SiSpring,
  SiFlask,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { FaFlutter, FaGolang } from "react-icons/fa6";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";

const Skills = () => {
  return (
    <main>
      <section id="habilidades" className="section">
        <h2>Habilidades</h2>
        <div className="icons">
          <FaFigma className="icon " />
          <SiTailwindcss className="icon " />
          <SiNextdotjs className="icon " />
          <FaReact className="icon" />
          <FaVuejs className="icon" />
          <FaAngular className="icon" />
          <FaLaravel className="icon" />
          <SiSpring className="icon " />
          <SiFlask className="icon" />
          <SiTypescript className="icon" />
          <FaNodeJs className="icon " />
          <FaGolang className="icon " />
          <FaFlutter className="icon" />
          <DiMongodb className="icon" />
          <DiMysql className="icon" />
          <DiPostgresql className="icon" />
        </div>
      </section>
    </main>
  );
};

export default Skills;
