import React from "react";
import { Link } from "react-router-dom";

const WartechNav = () => {
  return (
    <nav className="bg-transparent p-2 flex justify-between items-center md:px-20 overflow-x-hidden">
      <div className="flex-shrink-0">
        <Link to="/">
        <img src="cear_logo.png" alt="Logo" className=" w-14 md:w-16" />
        </Link>
      </div>
      <div className="flex space-x-4">
        <button className="bg-[#054569] text-sm md:text-lg font-semibold text-white px-3 py-2 rounded-md hover:bg-transparent hover:border-[#9ccddc] hover:border hover:text-[#9ccddc] ">
          <a href="/Docs/Brochure.pdf" download="Brochure.pdf">
            Events Brochure
          </a>
        </button>
      </div>
    </nav>
  );
};

export default WartechNav;
