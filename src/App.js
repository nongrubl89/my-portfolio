import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Project from "./components/projects/Project";
import Contact from "./components/Contact";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

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
    <Container fluid className="p-0">
      <Navigation
        handleClickNav={handleClickNav}
        handleClickContact={handleClickContact}
      />
      <Intro handleClickContact={handleClickContact} />
      <Project ref={portfolioRef} />
      <Contact ref={contactRef} />
    </Container>
  );
}

export default App;
