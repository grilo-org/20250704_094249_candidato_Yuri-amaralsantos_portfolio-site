import Header from "../sessions/Header/";
import ProjectsSection from "../sessions/projects/ProjectSection";
import About from "../sessions/about/About";

import Skills from "../sessions/skills/Skills";
import DesignSection from "../sessions/designs/DesignSection";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <ProjectsSection />
      <DesignSection />
      <About />
      <Skills />
    </div>
  );
};
export default Home;
