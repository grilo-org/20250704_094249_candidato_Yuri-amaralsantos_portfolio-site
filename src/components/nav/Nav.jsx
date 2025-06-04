// Learn about this import: https://reactjs.org/docs/hooks-state.html
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const pageLinks = [
    { path: "/About", label: "Sobre" },
    { path: "/projects", label: "Projetos" },
  ];

  const renderLinks = () => (
    <>
      {pageLinks.map(({ path, label }) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
      {/* Contato scrolls to current page footer */}
      <a href={`${location.pathname}#footer`}>Contato</a>
    </>
  );

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <div id="buttonBackground">
        <a
          id="toggleButton"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
          className="nav-link-button"
        >
          ☰
        </a>
      </div>

      {/* Mobile Navigation */}
      {menuVisible && (
        <div id="menuMobile">
          <Link to="/">Home</Link>
          {renderLinks()}
          <a href="curriculoti.pdf" download>
            <span>Currículo</span>
          </a>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav>
        <div>
          <Link to="/">Home</Link>
          {renderLinks()}
        </div>
        <a href="curriculoti.pdf" download className="nav-link-button">
          <span>Currículo</span>
        </a>
      </nav>
    </>
  );
};

export default Nav;
