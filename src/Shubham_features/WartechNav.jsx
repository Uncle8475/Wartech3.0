import React from "react";

const WartechNav = () => {
  return (
    <nav className="bg-transparent p-2 flex justify-between items-center px-20">
      <div className="flex-shrink-0">
        <img src="cear_logo.png" alt="Logo" className="h-20 w-20" />
      </div>
      <div className="flex space-x-4">
        <button className="bg-rose-800 font-semibold text-white px-3 py-2 rounded-md hover:bg-transparent hover:border-rose-800 hover:border hover:text-rose-800 ">
          <a href="/Docs/Brochure.pdf" download="Brochure.pdf">
            Events Brochure
          </a>
        </button>
        <button className="bg-transparent border text-white px-3 py-2 rounded-md">
          Menu
        </button>
      </div>
    </nav>
  );
};

export default WartechNav;
