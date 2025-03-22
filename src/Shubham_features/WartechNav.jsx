import React from "react";

const WartechNav = () => {
  return (
    <nav className="bg-transparent p-2 flex justify-between items-center px-20">
      <div className="flex-shrink-0">
        <img src="cear_logo.png" alt="Logo" className="h-20 w-20" />
      </div>
      <div className="flex space-x-4">
        <button className="bg-[#054569] font-semibold text-white px-3 py-2 rounded-md hover:bg-transparent hover:border-[#9ccddc] hover:border hover:text-[#9ccddc] ">
          <a href="/Docs/Brochure.pdf" download="Brochure.pdf">
            Events Brochure
          </a>
        </button>
      </div>
    </nav>
  );
};

export default WartechNav;
