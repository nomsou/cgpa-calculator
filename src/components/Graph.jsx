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
import { calculateCGPA } from "../utils/utils";

function Graph({ semesters }) {
  // Calculate GPA per semester and CGPA at each semester
  const gpa_per_semester = semesters.map(
    (semester) => calculateCGPA([semester]).CGPA
  );

  let cgpa_at_semester = [];

  for (let i = 0; i < semesters.length; i++) {
    let cgpa = calculateCGPA(semesters.slice(0, i + 1)).CGPA;
    cgpa_at_semester.push(cgpa);
  }

  // Prepare data for recharts
  const data = semesters.map((semester, index) => ({
    semester: `Semester ${index + 1}`,
    gpa: gpa_per_semester[index],
    cgpa: cgpa_at_semester[index],
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="gpa"
            stroke="#FF6384"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="cgpa"
            stroke="#36A2EB"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graph;
