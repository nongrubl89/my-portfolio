import { React, useState, useEffect } from "react";
import Resume from "../images/LisaBurgnonResume2021.pdf";
import { useSpring, animated } from "react-spring";
import { Navbar, Nav } from "react-bootstrap";

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

  const styles = useSpring({
    loop: false,
    config: { duration: 1000 },
    to: { opacity: 1 },
    // to: { opacity: 0.5 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={scroll ? "navbar" : "navbar-gradient"}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav style={styles} className="justify-content-end p-2">
          <animated.button
            style={styles}
            className="bg-transparent border-0 text-dark"
            onClick={props.handleClickNav}
          >
            Portfolio
          </animated.button>

          <animated.button
            style={styles}
            onClick={onResumeClick}
            className="bg-transparent border-0 text-dark"
          >
            Resume
          </animated.button>
          <animated.button
            style={styles}
            onClick={props.handleClickContact}
            className="bg-transparent border-0 text-dark"
          >
            Contact
          </animated.button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
