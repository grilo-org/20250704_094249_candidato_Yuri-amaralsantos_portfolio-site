import Header from "../sections/header/Header";
import ProjectsSection from "../sections/projects/ProjectSection";

import Skills from "../sections/skills/Skills";

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
