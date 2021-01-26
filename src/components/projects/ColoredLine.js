import React from "react";

export default function ColoredLine() {
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
    </div>
  );
}
