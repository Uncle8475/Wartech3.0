import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Cear-logo.png";
import contacti from "../assets/arrow-right-solid.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <nav
      className={`w-full top-0 left-0 z-10 ${
        isHomepage ? "absolute" : "fixed"
      } bg-transparent backdrop-blur-md p-4 flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="w-14">
        <img src={logo} alt="Club Logo" className="w-full" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white text-lg">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#events" className="hover:text-gray-300">
            Events
          </a>
        </li>
        <li>
          <a href="#Milestones" className="hover:text-gray-300">
            Milestones
          </a>
        </li>
      </ul>

      {/* Contact Button */}
      <button className="hidden md:flex items-center bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700 transition-all">
        Contact us <img src={contacti} alt="arrow icon" className="ml-2 w-4" />
      </button>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-black text-white shadow-lg flex flex-col p-6 transition-transform">
          <span
            className="text-3xl cursor-pointer absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </span>
          <ul className="mt-10 space-y-6 text-lg">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#events" onClick={() => setIsOpen(false)}>
                Events
              </a>
            </li>
            <li>
              <a href="#Milestones" onClick={() => setIsOpen(false)}>
                Milestones
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
