import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/home";
import Porfolio from "../src/components/pages/portfolio";

import Nav from "../src/components/elements/nav/Nav";
import Footer from "../src/components/elements/footer/Footer";

// Mapping pages dynamically

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Porfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
