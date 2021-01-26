import React from "react";

function ProjectTitle(props) {
  return (
    <div className="title-container">
      {props.children}
      <a
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}
        href={props.href}
        className="project-title"
      >
        {props.title}
      </a>
    </div>
  );
}

export default ProjectTitle;
