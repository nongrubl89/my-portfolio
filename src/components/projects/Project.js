import React, { useState, useEffect } from "react";
import SvgLine from "./SvgLine";
import ProjectDescription from "./ProjectDescription";
import ProjectTitle from "./ProjectTitle";
import Link from "./Link.js";

const Project = React.forwardRef((props, ref) => {
  const [hovered1, setHovered1] = useState(false);
  const [hoverDiv1, setHoverDiv1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hoverDiv2, setHoverDiv2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hoverDiv3, setHoverDiv3] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  const toggleHover1 = (e) => {
    setHovered1(!hovered1);
    setHoverDiv1(!hoverDiv1);
    console.log("hovered1", hovered1);
    console.log("hoverDiv1", hoverDiv1);
  };

  const toggleHover2 = (e) => {
    setHovered2(!hovered2);
    console.log(hovered1);
    setHoverDiv2(!hoverDiv2);
  };

  const toggleHover3 = (e) => {
    setHovered3(!hovered3);
    console.log(hovered1);
    setHoverDiv3(!hoverDiv3);
  };

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="projects" id="portfolio" ref={ref}>
      <ProjectTitle
        onMouseOver={toggleHover1}
        onMouseOut={toggleHover1}
        hovered1={hovered1}
        hoverDiv1={hoverDiv1}
        title="React CV Generator"
        href="https://nongrubl89.github.io/React-CV-Generator/"
      >
        {isDesktop ? <Link className="hover-div1-show" /> : ""}
      </ProjectTitle>
      {isDesktop ? (
        <SvgLine
          className={hoverDiv1 ? "svg-container-show" : "svg-container-hide"}
        />
      ) : (
        ""
      )}
      <ProjectDescription
        href={"https://github.com/nongrubl89/React-CV-Generator"}
        hrefLive={"https://nongrubl89.github.io/React-CV-Generator/"}
        description={
          "This app takes the guesswork out of creating a resume. Users can input their information and the app will generate a resume that can be downloaded as a .pdf file"
        }
      />

      <ProjectTitle
        onMouseOver={toggleHover2}
        onMouseOut={toggleHover2}
        title="Book Tracker App"
        hovered2={hovered2}
        hoverDiv2={hoverDiv2}
        href="https://nongrubl89.github.io/Library/"
      >
        {isDesktop ? <Link className="hover-div2-show" /> : ""}
      </ProjectTitle>
      {isDesktop ? (
        <SvgLine
          className={hoverDiv2 ? "svg-container-show" : "svg-container-hide"}
        />
      ) : (
        ""
      )}
      <ProjectDescription
        href={"https://github.com/nongrubl89/Library"}
        hrefLive={"https://nongrubl89.github.io/Library/"}
        description={
          "As a book nerd, I was excited to create an app where users can track what they're currently reading, and discover new books they might like. Users can track read and unread books, rate books, and discover other books by an author thanks to the New York Times books API."
        }
      />
      <ProjectTitle
        onMouseOver={toggleHover3}
        onMouseOut={toggleHover3}
        title="To-Do List"
        hovered3={hovered3}
        hoverDiv3={hoverDiv3}
        href="https://nongrubl89.github.io/To-Do-List/"
      >
        {isDesktop ? <Link className="hover-div3-show" /> : ""}
      </ProjectTitle>
      {isDesktop ? (
        <SvgLine
          className={hoverDiv3 ? "svg-container-show" : "svg-container-hide"}
        />
      ) : (
        ""
      )}
      <ProjectDescription
        href={"https://github.com/nongrubl89/To-Do-List"}
        hrefLive={"https://nongrubl89.github.io/To-Do-List/"}
        description={
          "A to-do list app where users can create project based to-dos and add tasks to each project. Users can rank tasks in order of importance. I used Google's Firebase Authorization and Realtime Database so users can sign in and out and save their to-dos."
        }
      />
    </div>
  );
});

export default Project;
