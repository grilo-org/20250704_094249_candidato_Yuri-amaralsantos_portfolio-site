import Header from "../sessions/header/Header";
import ProjectsSection from "../sessions/projects/ProjectSection";

import Skills from "../sessions/skills/Skills";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <ProjectsSection />

      <Skills />
    </div>
  );
};
export default Home;
