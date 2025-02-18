import React, { useState } from "react";
import Course from "../components/Course";
import { CourseObject } from "../utils/utils";

function Semester(props) {
  const [showModal, setShowModal] = useState(false);

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

  const handleClearConfirmation = () => {
    setShowModal(true);
  };

  const handleConfirmClear = () => {
    props.handleClearCourses();
    setShowModal(false);
  };

  const handleCancelClear = () => {
    setShowModal(false);
    window.location.href = "/"; // Redirect to homepage
  };

  return (
    <div className="flex flex-col">
      <div className="flex pb-4">
        <span className="font-bold mr-auto text-blue-900">
          Semester {props.id + 1}
        </span>
        <span className="font-bold">
          Semester GPA: {calculateGPA(props.courses)}
        </span>
      </div>

      <table className="table-auto mx-3">
        <thead>
          <tr>
            <th className="text-left text-teal-700">Course Name</th>
            <th className="text-left text-teal-700">Grade</th>
            <th className="text-left text-teal-700">Credits</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course, index) => (
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
          ))}
        </tbody>
      </table>

      <div className="flex justify-center gap-4 pt-3">
        <button
          className="bg-teal-700 text-white p-2 rounded font-bold hover:bg-teal-800"
          onClick={handleAddCourse}
        >
          Add Course
        </button>
        <button
          className="bg-red-600 text-white p-2 rounded font-bold hover:bg-red-700"
          onClick={handleClearConfirmation}
        >
          Clear All
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-bold">Are you sure?</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleConfirmClear}
              >
                Yes
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={handleCancelClear}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Semester;
