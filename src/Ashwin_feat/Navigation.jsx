import React, { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Cear-logo.png";
import contactIcon from "../assets/arrow-right-solid.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const navLinksRef = useRef([]); // Store multiple refs
  const ContbutRef = useRef([]); // Store multiple refs

  useGSAP(() => {
    gsap.from(navLinksRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.2,
      stagger: 0.4,
    });
    gsap.from(ContbutRef.current, {
      y: 20,
      opacity: 0,
      duration: 1.2,
    });
  });

  return (
    <nav
      className={`w-full md:max-h-24 top-0 left-0 z-50 p-5 ${
        isHomepage ? "absolute" : "fixed"
      } bg-transparent backdrop-blur-[2px] flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="w-16">
        <img src={logo} alt="Club Logo" className="w-[3rem]" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white text-lg">
        {["Home", "About Us", "Wartech", "Blogs", "Milestones"].map(
          (item, index) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.replace(" ", "")}`}
                ref={(el) => (navLinksRef.current[index] = el)}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-800 font-semibold"
                    : "hover:text-gray-300"
                }
              >
                {item}
              </NavLink>
            </li>
          )
        )}
      </ul>

      {/* Contact Button */}
      <button
        ref={ContbutRef}
        className="  md:flex items-center bg-red-800 px-5 py-2 text-md rounded-xl text-white hover:bg-red-800 transition-all shadow-md"
      >
        Contact us
        <img src={contactIcon} alt="arrow icon" className="ml-2 w-4" />
      </button>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-screen bg-black text-white shadow-lg flex flex-col p-6 transition-transform">
          <span
            className="text-4xl cursor-pointer absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </span>
          <ul className="mt-10 space-y-8 text-xl">
            {["Home", "About Us", "Wartech", "Blogs", "Milestones"].map(
              (item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.replace(" ", "")}`}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive ? "text-red-600" : ""
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
