import React, { useState } from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuVisible(!menuVisible);

  // Function to handle smooth scrolling
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <a
        id="toggleButton"
        href="#"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          toggleMenu();
        }}
        className="nav-link-button"
      >
        ☰
      </a>

      {/* Mobile menu */}
      {menuVisible && (
        <div id="menuMobile">
          <Link to="/">Home</Link>
          {location.pathname === "/" ? (
            <>
              <a href="#sobre" onClick={(e) => scrollToSection(e, "sobre")}>
                Sobre
              </a>
              <a
                href="#projetos"
                onClick={(e) => scrollToSection(e, "projetos")}
              >
                Projetos
              </a>
              <a href="#design" onClick={(e) => scrollToSection(e, "design")}>
                Design
              </a>
              <a
                href="#habilidades"
                onClick={(e) => scrollToSection(e, "habilidades")}
              >
                Habilidades
              </a>
              <a href="#contato" onClick={(e) => scrollToSection(e, "contato")}>
                Contato
              </a>
            </>
          ) : (
            <>
              <Link to="/#sobre">Sobre</Link>
              <Link to="/#projetos">Projetos</Link>
              <Link to="/#design">Design</Link>
              <Link to="/#habilidades">Habilidades</Link>
            </>
          )}
          <a href="curriculoti.pdf" download>
            <span>Currículo</span>
          </a>
        </div>
      )}

      {/* Desktop nav */}
      <nav>
        <div>
          <Link to="/">Home</Link>
          {location.pathname === "/" ? (
            <>
              <a href="#sobre" onClick={(e) => scrollToSection(e, "sobre")}>
                Sobre
              </a>
              <a
                href="#projetos"
                onClick={(e) => scrollToSection(e, "projetos")}
              >
                Projetos
              </a>
              <a href="#design" onClick={(e) => scrollToSection(e, "design")}>
                Design
              </a>
              <a
                href="#habilidades"
                onClick={(e) => scrollToSection(e, "habilidades")}
              >
                Habilidades
              </a>
            </>
          ) : (
            <>
              <Link to="/#sobre">Sobre</Link>
              <Link to="/#projetos">Projetos</Link>
              <Link to="/#design">Design</Link>
              <Link to="/#habilidades">Habilidades</Link>
              <Link to="/#contato">Contato</Link>
            </>
          )}
        </div>

        <a href="curriculoti.pdf" download className="nav-link-button">
          <span>Currículo</span>
        </a>
      </nav>
    </>
  );
};

export default Nav;
