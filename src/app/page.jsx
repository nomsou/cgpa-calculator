"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Graph from "../components/Graph";
import Semester from "../components/Semester";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import { CourseObject, calculateCGPA } from "../utils/utils";
import Link from "next/link";

function Page() {
  const [semesters, setSemesters] = useState([]);
  const [activeSemesterID, setActiveSemester] = useState(0);

  const localStorageKey = "results";

  useEffect(() => {
    let results = localStorage.getItem(localStorageKey);
    if (results !== null) {
      results = JSON.parse(results);
    } else if (results === null || results.length < 0) {
      results = [{ courses: [new CourseObject("", 0, 5)] }];
    }

    setSemesters(results);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(semesters));
  }, [semesters]);

  const addCourse = (semesterIndex, course) => {
    const newSemesters = [...semesters];
    newSemesters[semesterIndex].courses.push(course);
    setSemesters(newSemesters);
    return newSemesters;
  };

  const addSemester = () => {
    const newSemesters = [...semesters];
    newSemesters.push({ courses: [new CourseObject("", 0, 5)] });
    setSemesters(newSemesters);
    setActiveSemester(newSemesters.length - 1);
  };

  const checkIfSemesterActive = (semesterIndex) => {
    return semesterIndex === activeSemesterID;
  };

  const handleUnitChange = (semesterIndex, courseIndex, unit) => {
    const newSemesters = [...semesters];
    let semester = newSemesters[semesterIndex];
    semester.courses[courseIndex].unit = parseInt(unit);
    setSemesters(newSemesters);
  };

  const handleCourseTitleChange = (semesterIndex, courseIndex, title) => {
    const newSemesters = [...semesters];
    let semester = newSemesters[semesterIndex];
    semester.courses[courseIndex].title = title;
    setSemesters(newSemesters);
  };

  const handleGradeChange = (semesterIndex, courseIndex, grade) => {
    const newSemesters = [...semesters];
    let semester = newSemesters[semesterIndex];
    semester.courses[courseIndex].grade = grade;
    setSemesters(newSemesters);
  };

  const handleClearCourses = (semesterIndex) => {
    const newSemesters = [...semesters];
    let semester = newSemesters[semesterIndex];
    semester.courses = [];
    setSemesters(newSemesters);
  };

  const handleDeleteCourse = (semesterIndex, courseIndex) => {
    const newSemesters = [...semesters];
    let semester = newSemesters[semesterIndex];
    semester.courses.splice(courseIndex, 1);
    setSemesters(newSemesters);
  };

  const handleDeleteSemester = (semesterIndex) => {
    if (semesters.length === 1) {
      handleClearCourses(semesterIndex);
      return;
    }
    const newSemesters = [...semesters];
    newSemesters.splice(semesterIndex, 1);
    if (semesterIndex === activeSemesterID) {
      setActiveSemester(Math.max(activeSemesterID - 1, 0));
    }
    setSemesters(newSemesters);
  };

  const handleViewAnalysis = () => {
    const element = document.getElementById("details-section");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const results = calculateCGPA(semesters);

  return (
    <>
      <div className="content flex flex-col grow p-6 px-8 gap-3 bg-[#E5E7EB]">
        {/* Header */}
        <span className="content__header mb-3 border-4 border-green-800 self-start p-3 text-green-900 font-extrabold rounded-lg shadow-lg hover:shadow-2xl hover:border-green-600 transition-all duration-300">
          <Link href="/" passHref>
            <span className="cursor-pointer">GPA CALCULATOR</span>
          </Link>
        </span>
        {/* Dialup section */}
        <div className="flex border-b-2 pb-3">
          <div className="w-52 ml-auto mr-auto">
            <ProgressBar value={results.CGPA} />
          </div>
          <div className="flex flex-col">
            <span className="mb-4">
              <span>Total Units: {results.totalUnits}</span>
            </span>
            <button
              className="bg-teal-800 p-3 rounded text-white hover:bg-teal-700"
              onClick={handleViewAnalysis}
            >
              View Analysis
            </button>
          </div>
        </div>

        {/* Semesters picker */}
        <div className="flex whitespace-nowrap flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {semesters.map((semester, index) => {
              return (
                <Button
                  key={index}
                  id={index}
                  active={checkIfSemesterActive(index)}
                  onClick={() => setActiveSemester(index)}
                  handleDeleteSemester={() => handleDeleteSemester(index)}
                />
              );
            })}
          </div>
          <button
            className="ml-auto rounded border p-2 bg-blue-500 text-white hover:bg-blue-400"
            onClick={addSemester}
          >
            Add Semester +
          </button>
        </div>

        {/* Calculator */}
        <div className="flex flex-col bg-white grow p-4 shadow-md">
          {semesters.length > 0 && (
            <Semester
              courses={semesters[activeSemesterID].courses}
              id={activeSemesterID}
              addCourse={addCourse}
              handleGradeChange={handleGradeChange}
              handleUnitChange={handleUnitChange}
              handleCourseTitleChange={handleCourseTitleChange}
              handleClearCourses={() => handleClearCourses(activeSemesterID)}
              handleDeleteCourse={handleDeleteCourse}
            />
          )}

          {/* Semester data */}
          {/* Analysis section - Graphs */}
          <div id="details-section" className="w-full h-[600px] mt-5">
            <Graph semesters={semesters} />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Page;
