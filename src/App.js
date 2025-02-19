import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectsTech from "./components/Projects/ProjectsTech";
import ProjectsGraphic from "./components/Projects/ProjectsGraphic";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Thumbnails from "./components/Projects/Thumbnails";
import ContentBanners from "./components/Projects/ContentBanners";
import Others from "./components/Projects/Others";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        
        {/* Wrapper for all content that should grow */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectstech" element={<ProjectsTech />} />
            <Route path="/projectsgraphic" element={<ProjectsGraphic />} />
            <Route path="/projectsgraphic/thumbnails" element={<Thumbnails />} />
            <Route path="/projectsgraphic/contentbanners" element={<ContentBanners />} />
            <Route path="/projectsgraphic/others" element={<Others />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        
        {/* Footer that stays at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
