import React from "react";
import Resume from "../images/BurgnonResume2021.pdf";

function Navbar(props) {
  const onResumeClick = () => {
    window.open(Resume);
  };
  return (
    <div className="navbar">
      <button onClick={props.handleClickNav} className="nav-item">
        Portfolio
      </button>

      <button onClick={onResumeClick} className="nav-item">
        Résumé
      </button>
      <button onClick={props.handleClickContact} className="nav-item">
        Contact
      </button>
    </div>
  );
}

export default Navbar;
