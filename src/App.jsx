import React from "react";
import Nav from "./components/elements/nav/Nav";
import Header from "./components/elements/header/Header";
import Footer from "./components/elements/footer/Footer";
import ProjectsSection from "./components/sessions/projects/ProjectSection";
import About from "./components/sessions/about/About";
import Contacts from "./components/sessions/contacts/Contacts";
import Skills from "./components/sessions/skills/Skills";
import DesignSection from "./components/sessions/designs/DesignSection";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <ProjectsSection />
      <DesignSection />
      <About />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
