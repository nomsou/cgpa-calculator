import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function ProgressBar({ value }) {
  let value_int = (value / 5) * 100;

  return (
    <div className="relative flex justify-center items-center">
      <CircularProgressbarWithChildren
        value={value_int}
        circleRatio={0.6}
        strokeWidth={12}
        styles={{
          root: {
            transform: "rotate(-108deg)",
          },
          path: {
            stroke: "#7D52E9", // Your custom color for the progress path
            strokeLinecap: "round",
            strokeWidth: 12,
          },
          trail: {
            stroke: "rgba(128,128,200, 0.4)", // Faded trail color
            strokeLinecap: "round",
          },
        }}
      >
        <div className="text-center text-xl mt-4">
          <strong className="block">{value}</strong>
          <small className="text-sm">Cumulative CGPA</small>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default ProgressBar;
