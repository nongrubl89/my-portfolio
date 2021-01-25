import React from "react";

function ProjectDescription(props) {
  return (
    <div className="project-description">
      <p className="text-show">
        {props.description}
      </p>
    </div>
  );
}

export default ProjectDescription;
