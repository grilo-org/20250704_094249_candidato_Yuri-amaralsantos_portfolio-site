import Header from "../sessions/header/Header";
import ProjectsSection from "../sessions/projects/ProjectSection";

import Skills from "../sessions/skills/Skills";
import DesignSection from "../sessions/designs/DesignSection";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <ProjectsSection />
      <DesignSection />

      <Skills />
    </div>
  );
};
export default Home;
