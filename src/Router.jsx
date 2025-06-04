import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import ProjectPage from "../src/pages/projects/projects";
import AboutPage from "../src/pages/about";

import Nav from "../src/components/nav/Nav";
import Footer from "../src/components/footer/Footer";

// Mapping pages dynamically

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
