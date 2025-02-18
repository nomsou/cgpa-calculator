import React from "react";
import { BsGithub } from "react-icons/bs";

function Icon({ icon, url }) {
  return (
    <a
      href={url}
      className="h-8 w-8 text-white hover:text-indigo-400 transition duration-300"
    >
      {icon}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8 px-6">
      <div className="text-center text- mb-2">
        Developed by{" "}
        <span className="font-semibold">
          <a
            href="https://github.com/nomsou/cgpa-calculator"
            className="underline hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            Nomso 🦅
          </a>
        </span>
        .
      </div>
      <div className="text-center text-base mb-4">
        <span className="font-normal text-gray-300">
          Original design by{" "}
          <a
            href="https://github.com/Josh596"
            className="underline hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            @josh596
          </a>
          .
        </span>
      </div>
      <div className="flex justify-center gap-6 ">
        <Icon icon={<BsGithub size={24} />} url={"https://github.com/nomsou"} />
      </div>
      {/* <div className="text-center text-m">
        Source code for this project is available{" "}
        <a
          className="underline hover:text-green-500"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nomsou/cgpa-calculator"
        >
          here
        </a>
        .
      </div> */}
    </footer>
  );
}

export default Footer;
