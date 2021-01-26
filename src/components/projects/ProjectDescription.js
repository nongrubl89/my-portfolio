import React, { useState, useEffect } from "react";
import ColoredLine from "./ColoredLine";

function ProjectDescription(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="project-description">
      <p className="text-show">
        {props.description}
        {isDesktop ? <ColoredLine href={props.href} /> : ""}
      </p>
      <a className="mobile-link" href={props.hrefLive}>
        Live Project
      </a>
    </div>
  );
}

export default ProjectDescription;
