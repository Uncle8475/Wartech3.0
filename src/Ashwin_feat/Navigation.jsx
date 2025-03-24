import React, { useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Import react-scroll
import logo from "../assets/Cear-logo.png";
import contactIcon from "../assets/arrow-right-solid.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";
  const navLinksRef = useRef([]);
  const ContbutRef = useRef([]);

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

  const handleAboutClick = () => {
    if (isHomepage) {
      scroll.scrollTo(800, { smooth: true, duration: 500 });
    } else {
      navigate("/", { state: { scrollTo: "about" } });
    }
  };

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
              {item === "About Us" ? (
                <button
                  ref={(el) => (navLinksRef.current[index] = el)}
                  onClick={handleAboutClick}
                  className="hover:text-gray-300"
                >
                  {item}
                </button>
              ) : (
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
              )}
            </li>
          )
        )}
      </ul>

      {/* Contact Button */}
      <button
        ref={ContbutRef}
        className="flex items-center justify-center w-fit px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-light bg-red-800 rounded-lg text-white hover:bg-red-700 transition-all shadow-md"
      >
        Contact us
        <img
          src={contactIcon}
          alt="arrow icon"
          className="ml-2 w-4 sm:w-5 h-4 "
        />
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
                  {item === "About Us" ? (
                    <button
                      onClick={handleAboutClick}
                      className="hover:text-red-600"
                    >
                      {item}
                    </button>
                  ) : (
                    <NavLink
                      to={item === "Home" ? "/" : `/${item.replace(" ", "")}`}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "text-red-600" : ""
                      }
                    >
                      {item}
                    </NavLink>
                  )}
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
