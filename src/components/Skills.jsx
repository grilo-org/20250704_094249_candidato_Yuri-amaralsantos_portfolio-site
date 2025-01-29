import React from "react";
import "./Skills.css";

const Skills = () => {
  // Dynamically generate icons from 1 to 23
  const icons = Array.from({ length: 23 }, (_, i) => ({
    src: new URL(`../assets/icons/${i + 1}.png`, import.meta.url).href,
    alt: `Icon ${i + 1}`, // Descriptive alt text
  }));

  return (
    <main>
      <section id="habilidades" className="section">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          {icons.map((icon, index) => (
            <div key={index} className="skill-item">
              <img
                src={icon.src}
                alt={icon.alt}
                className="skill-icon"
                loading="lazy" // Improves performance by deferring image loading
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;
