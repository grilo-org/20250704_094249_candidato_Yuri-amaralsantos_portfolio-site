import "./About.css";

const About = () => {
  return (
    <main>
      <div id="caixaSobre">
        <h2>Sobre mim</h2>
        <p className="paragrafoUnico">
          Olá, meu nome é Yuri Amaral Santos, sou natural do Rio de Janeiro e me
          formei em Análise e Desenvolvimento de Sistemas pela Universidade
          Estácio de Sá (UNESA).
          <span className="espacoParagrafo" />
          Sou desenvolvedor e designer, com grande paixão por criar soluções
          inovadoras e funcionais. Minha principal ferramenta de design é o
          Figma.
          <span className="espacoParagrafo" />
          No desenvolvimento, sou especializado em JavaScript, Python e Java, e
          utilizo os frameworks Vue.js e React para front-end. Tenho experiência
          em desenvolvimento de aplicativos móveis com Dart e Flutter.
          <span className="espacoParagrafo" />
          Além disso, possuo experiência na criação de jogos com Unity, no
          desenvolvimento de bancos de dados e no gerenciamento de serviços de
          nuvem, sempre buscando aprimorar minhas habilidades e entregar
          resultados de qualidade.
        </p>
      </div>
      <div className="experiencia">
        <h3>Experiências</h3>
        <ul>
          <li>PlanoBTech (2024-atualmente): Desenvolvedor</li>
        </ul>
      </div>
    </main>
  );
};

export default About;
