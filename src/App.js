import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Project from "./components/projects/Project";
import Contact from "./components/Contact";
import React, { useRef } from "react";

function App() {
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleClickNav = () => {
    portfolioRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  };

  const handleClickContact = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  };
  return (
    <div className="container">
      <Navbar
        handleClickNav={handleClickNav}
        handleClickContact={handleClickContact}
      />
      <Intro />
      <Project ref={portfolioRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
