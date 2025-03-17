import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Cear-logo.png";
import contacti from "../assets/arrow-right-solid.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <nav
      className={`w-full h-full md:max-h-28 top-0 left-0 z-10 ${
        isHomepage ? "absolute" : "fixed"
      } bg-transparent backdrop-blur-md p-4 flex justify-between items-center `}
    >
      {/* Logo */}
      <div className="w-14">
        <img src={logo} alt="Club Logo" className="w-full" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-gray-300" : "hover:text-gray-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#about"
            className={({ isActive }) =>
              isActive ? "text-gray-300" : "hover:text-gray-300"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#events"
            className={({ isActive }) =>
              isActive ? "text-gray-300" : "hover:text-gray-300"
            }
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#Milestones"
            className={({ isActive }) =>
              isActive ? "text-gray-300" : "hover:text-gray-300"
            }
          >
            Milestones
          </NavLink>
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
        <div className="fixed top-0 right-0 w-full h-full bg-black text-white shadow-lg flex flex-col p-6 transition-transform">
          <span
            className="text-3xl cursor-pointer absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </span>
          <ul className="mt-10 space-y-6 text-lg">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "text-gray-300" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "text-gray-300" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#events"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "text-gray-300" : "")}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#Milestones"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "text-gray-300" : "")}
              >
                Milestones
              </NavLink>
            </li>
          </ul>
          <button className="hidden md:flex items-center bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700 transition-all">
            Contact us{" "}
            <img src={contacti} alt="arrow icon" className="ml-2 w-4" />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
