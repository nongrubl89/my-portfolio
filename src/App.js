import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Project from "./components/projects/Project";
import Contact from "./components/Contact";

import React, { useRef } from "react";

function App() {
  const portfolioRef = useRef(null);

  const handleClick = () => {
    portfolioRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  };
  return (
    <div className="container">
      <Navbar handleClick={handleClick} />
      <Intro />
      <Project ref={portfolioRef} />
      <Contact />
    </div>
  );
}

export default App;
