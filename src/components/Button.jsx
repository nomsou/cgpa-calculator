import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function Button({ onClick, active, id, handleDeleteSemester }) {
  return (
    <div
      className={`flex items-center justify-between rounded-full border ${
        active ? "bg-indigo-200" : "border-gray-300"
      } p-2 px-6 shadow-md transition duration-300 ease-in-out hover:scale-105`}
    >
      <button
        className="text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none"
        type="button"
        onClick={onClick}
      >
        Semester {id + 1}
      </button>

      <button
        className="text-red-500 hover:text-red-700 transition duration-200"
        type="button"
        onClick={handleDeleteSemester}
      >
        <BsFillTrashFill size={20} />
      </button>
    </div>
  );
}

export default Button;
