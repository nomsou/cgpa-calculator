import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function Button({ onClick, active, id, handleDeleteSemester }) {
  return (
    <div
      className={`flex items-center justify-between rounded-full border ${
        active ? "bg-teal-100" : "border-gray-300"
      } p-2 px-6 shadow-md transition duration-300 ease-in-out hover:scale-105`}
    >
      <button
        className="text-sm font-bold text-gray-800 hover:text-teal-800 focus:outline-none"
        type="button"
        onClick={onClick}
      >
        Semester {id + 1}
      </button>

      <button
        className="text-red-600 hover:text-red-800 transition duration-200"
        type="button"
        onClick={handleDeleteSemester}
      >
        <BsFillTrashFill size={20} />
      </button>
    </div>
  );
}

export default Button;
