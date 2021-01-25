import React from "react";

function Navbar(props) {
  return (
    <div className="navbar">
        <button onClick={props.handleClick} className="nav-item">
          Portfolio
        </button>

        <button className="nav-item">Résumé</button>
        <button className="nav-item">Contact</button>
    </div>
  );
}

export default Navbar;
