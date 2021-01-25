import React from "react";

function SvgLine(props) {
  return (
    <div className={props.className} data-nav={props.dataNav}>
      <svg height="10" width="200">
        <line
          className="path"
          x1="0"
          y1="0"
          x2="300"
          y2="00"
          style={{ stroke: "#fca311", fill: "#fca311", strokeWidth: "12" }}
        />
      </svg>
    </div>
  );
}

export default SvgLine;
