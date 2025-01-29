import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

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
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
          <a href="curriculoti.pdf" download>
            <span>Curriculo</span>
          </a>
        </div>
      )}

      {/* Desktop nav */}
      <nav>
        <div>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </div>

        <a href="curriculoti.pdf" download className="nav-link-button">
          <span>Currículo</span>
        </a>
      </nav>
    </>
  );
};

export default Nav;
