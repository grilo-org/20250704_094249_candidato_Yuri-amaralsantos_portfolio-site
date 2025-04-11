import Header from "../sections/header/Header";
import ProjectsSection from "../sections/projects/ProjectSection";
import DesignSection from "../sections/designs/DesignSection";

import Skills from "../sections/skills/Skills";

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
