import React from "react";

function ProjectTitle(props) {
  return (
    <div className="title-container">
      {props.children}
      <a
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}
        href="nongrubl89.github.io/BookTracker"
        className="project-title"
      >
        {props.title}
      </a>
    </div>
  );
}

export default ProjectTitle;
