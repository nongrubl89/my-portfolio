import React from "react";

function ProjectDescription(props) {
  return (
    <div className="project-description">
      <p className="text-show">
        {props.description}
      </p>
      <a className ="here mobile-link" href="#">Live Project</a>
    </div>
  );
}

export default ProjectDescription;
