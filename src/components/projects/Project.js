import React, { useState } from "react";
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
  return (
    <div className="projects" id="portfolio" ref={ref}>
      <ProjectTitle
        onMouseOver={toggleHover1}
        onMouseOut={toggleHover1}
        hovered1={hovered1}
        hoverDiv1={hoverDiv1}
        title="React CV Generator"
      >
        <Link className={hovered1 ? "hover-div1-show" : "hover-div1-hide"} />
      </ProjectTitle>

      <SvgLine
        className={hoverDiv1 ? "svg-container-show" : "svg-container-hide"}
      />
      <ProjectDescription description ={"This app takes user's information and generates a resume that can be downloaded as a .pdf file"}/>

      <ProjectTitle
        onMouseOver={toggleHover2}
        onMouseOut={toggleHover2}
        title="Book Tracker App"
        hovered2={hovered2}
        hoverDiv2={hoverDiv2}
      >
        <Link className={hovered2 ? "hover-div2-show" : "hover-div2-hide"} />
      </ProjectTitle>
      <SvgLine
        className={hoverDiv2 ? "svg-container-show" : "svg-container-hide"}
      />
      <ProjectDescription description={"As a book nerd, I was excited to create an app where users can track what they're currently reading, and discover new books they might like. Users can track read and unread books, rate books, and discover other books by an author thanks to the New York Times books API."}/>
      <ProjectTitle
        onMouseOver={toggleHover3}
        onMouseOut={toggleHover3}
        title="To-Do List"
        hovered3={hovered3}
        hoverDiv3={hoverDiv3}
      >
        <Link className={hovered3 ? "hover-div3-show" : "hover-div3-hide"} />
      </ProjectTitle>
      <SvgLine
        className={hoverDiv3 ? "svg-container-show" : "svg-container-hide"}
      />
      <ProjectDescription />
    </div>
  );
});

export default Project;
