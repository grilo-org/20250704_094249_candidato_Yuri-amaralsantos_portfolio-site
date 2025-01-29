import React from "react";
import "./Contacts.css";

const Contacts = () => {
  return (
    <main>
      <section id="contato" className="section">
        <h2>Contatos</h2>
        <div id="tableContact">
          <p className="lineContact">
            <span className="label">Email:</span>
            <a className="value" href="mailto:yuri.a.santos12@gmail.com">
              yuri.a.santos12@gmail.com
            </a>
          </p>
          <p className="lineContact">
            <span className="label">Email2:</span>
            <a className="value" href="mailto:yuriasantos@hotmail.com.br">
              yuriasantos@hotmail.com.br
            </a>
          </p>
          <p className="lineContact">
            <span className="label">Whatsapp/telefone:</span>
            <a className="value" href="https://wa.me/21986026955">
              21 986026955
            </a>
          </p>
          <p className="lineContact">
            <span className="label">Linkedin:</span>
            <span className="value">
              <a
                href="https://www.linkedin.com/in/yuri-amaral-santos-17264a25b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/yuri-amaral-santos-17264a25b/
              </a>
            </span>
          </p>
          <p className="lineContact">
            <span className="label">Github:</span>
            <span className="value">
              <a
                href="https://github.com/Yuri-amaralsantos"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Yuri-amaralsantos
              </a>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
