import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="titulo">
        <h1>Yuri Amaral Santos</h1>
        <p>Desenvolvedor e Designer</p>
        <h2>
          Transformando ideias em código, <br></br> e código em soluções.{" "}
        </h2>
        <a id="headerButton" href="mailto:yuri.a.santos12@gmail.com">
          Entre em contato
        </a>
      </div>
    </header>
  );
};

export default Header;
