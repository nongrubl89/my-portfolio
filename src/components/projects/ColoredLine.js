import React from "react";

export default function ColoredLine(props) {
  return (
    <div
      style={{ display: "grid", justifyContent: "left", paddingTop: ".25em" }}
    >
      <hr
        style={{
          color: "#fca311",
          backgroundColor: "#fca311",
          height: 1,
          border: "none",
          width: 300,
        }}
      />
      <a href={props.href} className="desktop-link">
        See the code here
      </a>
    </div>
  );
}
