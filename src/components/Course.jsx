import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function Course({
  course,
  handleUnitChange,
  handleGradeChange,
  handleDeleteCourse,
  handleCourseTitleChange,
}) {
  return (
    <tr>
      {/* Course Title */}
      <td className="pr-3">
        <input
          className="w-full uppercase bg-gray-100 text-gray-800 h-10 px-2"
          placeholder={"E.g GEG 111"}
          value={course?.title}
          onChange={(e) => handleCourseTitleChange(e.target.value)}
        />
      </td>
      {/* Grade, dropdown */}
      <td className="pr-3">
        <select
          className="w-16 text-center bg-gray-100 text-gray-800 h-10"
          value={course?.grade}
          onChange={(e) => handleGradeChange(e.target.value)}
        >
          <option value={5}>A</option>
          <option value={4}>B</option>
          <option value={3}>C</option>
          <option value={2}>D</option>
          <option value={1}>E</option>
          <option value={0}>F</option>
        </select>
      </td>
      {/* Units */}
      <td>
        <input
          className="w-16 text-center bg-gray-100 text-gray-800 h-10"
          placeholder="E.g 5"
          step={1}
          min={0}
          value={course?.unit}
          type="number"
          onInput={(e) => handleUnitChange(e.target.value)}
        />
      </td>
      {/* Delete button */}
      <td>
        <button onClick={handleDeleteCourse}>
          <BsFillTrashFill />
        </button>
      </td>
    </tr>
  );
}

export default Course;
