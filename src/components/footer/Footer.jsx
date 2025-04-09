import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div id="footer-widgets" className="clearfix">
          <div className="footer-widget">
            <a href="#">
              <h1>Yuri Amaral Santos</h1>
            </a>
            <div>
              <div className="footer-contact">
                <h3>
                  <a href="mailto:yuri.a.santos12@gmail.com">
                    yuri.a.santos12@gmail.com
                  </a>
                </h3>
                <h3>
                  <a href="mailto:yuriasantos@hotmail.com.br">
                    yuriasantos@hotmail.com.br
                  </a>
                </h3>
              </div>

              <div className="footer-icons">
                <a
                  href="https://www.linkedin.com/in/yuri-amaral-santos-17264a25b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/Yuri-amaralsantos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://wa.me/21986026955"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-bottom">
        <div className="container">
          <p>&copy; 2025 Yuri Amaral Santos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
