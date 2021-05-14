import { React, useState, useEffect } from "react";
import Resume from "../images/BurgnonResume2021.pdf";
// import { useSpring, animated } from "react-spring";
import { Navbar, Nav, Button } from "react-bootstrap";

function Navigation(props) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY < 300);
    });
  }, []);
  const onResumeClick = () => {
    window.open(Resume);
  };
  // const styles = useSpring({
  //   loop: false,
  //   to: { opacity: 1 },
  //   // to: { opacity: 0.5 },
  //   from: { opacity: 0 },
  //   delay: 400,
  // });
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={scroll ? "navbar" : "navbar-gradient"}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          <Button
            className="bg-transparent border-0 text-dark"
            onClick={props.handleClickNav}
          >
            Portfolio
          </Button>

          <Button
            onClick={onResumeClick}
            className="bg-transparent border-0 text-dark"
          >
            Résumé
          </Button>
          <Button
            onClick={props.handleClickContact}
            className="bg-transparent border-0 text-dark"
          >
            Contact
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
