import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ value }) {
  let value_int = (value / 5) * 100;

  return (
    <CircularProgressbarWithChildren
      value={value_int}
      circleRatio={0.6}
      strokeWidth={12}
      styles={{
        root: {
          transform: "rotate(-108deg)",
        },
        path: { stroke: "#7D52E9", strokeLinecap: "round", strokeWidth: 12 },
        trail: { stroke: "rgba(100,128,200, 0.4)", strokeLinecap: "round" },
      }}
    >
      <div className="text-center mt-[-30px]">
        <strong className="block text-2xl">{value}</strong>
        <small className="text-xs">Cumulative CGPA</small>
      </div>
    </CircularProgressbarWithChildren>
  );
}

export default ProgressBar;