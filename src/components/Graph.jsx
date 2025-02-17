import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { calculateCGPA } from "../utils/utils"; // Ensure this function is available

function Graph({ semesters }) {
  // Calculate GPA per semester and CGPA at each semester
  const gpa_per_semester = semesters.map(
    (semester) => calculateCGPA([semester]).CGPA
  );

  let cgpa_at_semester = [];

  // Calculate cumulative CGPA at each semester
  for (let i = 0; i < semesters.length; i++) {
    let cgpa = calculateCGPA(semesters.slice(0, i + 1)).CGPA;
    cgpa_at_semester.push(cgpa);
  }

  // Prepare data for recharts
  const data = semesters.map((semester, index) => ({
    semester: `Semester ${index + 1}`, // Label for each semester
    gpa: gpa_per_semester[index], // GPA of the current semester
    cgpa: cgpa_at_semester[index], // Cumulative CGPA up to the current semester
  }));

  return (
    <div className="w-full h-full">
      {" "}
      {/* Allow the parent to define the size */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20, // Added space for the legend
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Cartesian grid to show dashed lines */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* X-axis with the semester labels */}
          <XAxis dataKey="semester" />

          {/* Y-axis with a custom range and ticks */}
          <YAxis
            domain={[0, 5]} // Range from 0 to 5
            ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]} // Custom ticks for more granularity
          />

          {/* Tooltip for showing info on hover */}
          <Tooltip />

          {/* Legend for the two lines (GPA and CGPA), positioned at the top */}
          <Legend layout="horizontal" verticalAlign="top" align="center" />

          {/* Line for displaying the GPA per semester */}
          <Line
            type="monotone"
            dataKey="gpa" // Data key for GPA
            stroke="rgb(34, 193, 195)" // Teal color for the GPA line
            activeDot={{ r: 8 }} // Style for the active dot
          />

          {/* Line for displaying the cumulative CGPA */}
          <Line
            type="monotone"
            dataKey="cgpa" // Data key for CGPA
            stroke="rgb(148, 87, 233)" // Purple color for the CGPA line
            activeDot={{ r: 8 }} // Style for the active dot
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
