import React from "react";
import { BsGithub } from "react-icons/bs";

function Icon({ icon, url }) {
  return (
    <a
      href={url}
      className="h-8 w-8 text-white hover:text-blue-500 transition duration-300"
    >
      {icon}
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="text-center text-sm">
        Developed by{" "}
        <span className="font-semibold">
          <a
            href="https://github.com/nomsou"
            className="underline hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Nomso 🦅
          </a>
        </span>
        .
      </div>
      <div className="text-center text-sm mt-2">
        <span className="font-m">
          Original design by{" "}
          <a
            href="https://github.com/Josh596"
            className="underline hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            @josh596
          </a>
          . I merely improved on his design and made tweaks to the performance
          and structure.
        </span>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <Icon icon={<BsGithub size={24} />} url={"https://github.com/nomsou"} />
      </div>
      <div className="text-center mt-4 text-sm">
        Source code for this project is available{" "}
        <a
          className="underline hover:text-blue-500"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nomsou/cgpa-calculator"
        >
          here
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
