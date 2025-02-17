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
        path: { stroke: "#00A36C", strokeLinecap: "round", strokeWidth: 12 }, // Updated to light green
        trail: { stroke: "rgba(100, 200, 150, 0.4)", strokeLinecap: "round" }, // Light trail for contrast
      }}
    >
      <div className="text-center mt-[-30px]">
        <strong className="block text-3xl font-semibold text-green-800">
          {value}
        </strong>
        <small className="text-sm text-gray-800">Cumulative CGPA</small>
      </div>
    </CircularProgressbarWithChildren>
  );
}

export default ProgressBar;
