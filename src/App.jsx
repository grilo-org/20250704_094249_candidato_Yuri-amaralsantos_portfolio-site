import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectSection";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <ProjectsSection />
      <About />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
