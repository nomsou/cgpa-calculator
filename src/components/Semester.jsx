import React from "react";
import Course from "../components/Course";
import { CourseObject } from "../utils/utils";

function Semester(props) {
  const calculateGPA = (courses) => {
    let totalUnits = 0;
    let totalGradePoints = 0;

    courses.forEach((course) => {
      totalUnits += parseInt(course.unit);
      totalGradePoints += parseInt(course.unit) * parseInt(course.grade);
    });

    let gpa = (totalGradePoints / totalUnits).toFixed(2);

    return isNaN(gpa) ? 0 : gpa;
  };

  const handleAddCourse = () => {
    const course = new CourseObject("", 0, 5);
    props.addCourse(props.id, course);
  };

  return (
    <div className="flex flex-col">
      {/* Title */}
      <div className="flex pb-4">
        <span className="font-bold mr-auto text-blue-900">
          Semester {props.id + 1}
        </span>
        <span className="font-bold">
          Semester GPA: {calculateGPA(props.courses)}
        </span>
      </div>
      {/* Courses table */}
      <table className="table-auto mx-3">
        <thead>
          <tr>
            <th className="text-left text-teal-700">Course Name</th>
            <th className="text-left text-teal-700">Grade</th>
            <th className="text-left text-teal-700">Credits</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course, index) => {
            return (
              <Course
                key={index}
                id={index}
                course={course}
                handleCourseTitleChange={(title) =>
                  props.handleCourseTitleChange(props.id, index, title)
                }
                handleUnitChange={(unit) =>
                  props.handleUnitChange(props.id, index, unit)
                }
                handleGradeChange={(grade) =>
                  props.handleGradeChange(props.id, index, grade)
                }
                handleDeleteCourse={() =>
                  props.handleDeleteCourse(props.id, index)
                }
              />
            );
          })}
        </tbody>
      </table>

      {/* Add Course and Reset all */}
      <div className="flex justify-center gap-4 pt-3">
        <button
          className="bg-teal-700 text-white p-2 rounded font-bold hover:bg-teal-800"
          onClick={handleAddCourse}
        >
          Add Course
        </button>
        <button
          className="bg-red-600 text-white p-2 rounded font-bold hover:bg-red-700"
          onClick={props.handleClearCourses}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Semester;
