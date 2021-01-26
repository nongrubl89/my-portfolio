import React from "react";

function Intro(props) {
  return (
    <div className="intro">
      {props.children}
      <div className="intro-text-wrapper">
        <h4 className="intro-header">Hello and Welcome!</h4>
        <p className="intro-body">
          I am an early-career, self-taught web developer with a background in
          Business Aviation. I am currently seeking opportunities in the San
          Diego area. If you'd like to work together, get in touch{" "}
          <button onClick={props.handleClickContact} className="here" href="#">
            here
          </button>
          .
        </p>
      </div>
    </div>
  );
}

export default Intro;
