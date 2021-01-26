import React from "react";
import ColoredLine from "./ColoredLine";
function ProjectDescription(props) {
  return (
    <div className="project-description">
      <p className="text-show">
        {props.description}
        <ColoredLine />
        <a href="#" className="desktop-link">
          See the code here
        </a>
      </p>
      <a className="here mobile-link" href="#">
        Live Project
      </a>
    </div>
  );
}

export default ProjectDescription;
