import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Cear-logo.png";
import instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Facebook from "../assets/Facebook.png";
import TwitterX from "../assets/TwitterX.png";

function Footer() {
  return (
    <footer className=" bottom-0 w-full text-white py-10 px-6 border-t border-gray-300 bg-zinc-950">
      <div className="container mx-auto flex flex-wrap justify-between gap-8">
        {/* Logo & Address Section */}
        <div className="w-full md:w-1/3 flex flex-col">
          <img src={logo} alt="Club Logo" className="w-16 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-sm max-w-xs">
            Army Institute of Technology, Alandi Road, Pune, Maharashtra
            <br />
            Pin Code - 411015
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-1/4 flex flex-col">
          <h3 className="text-lg font-semibold mb-3">Menu</h3>
          <nav className="space-y-2 flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-bold hover:text-gray-400"
                  : "hover:text-gray-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Events"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-bold hover:text-gray-400"
                  : "hover:text-gray-400"
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/Milestones"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-bold hover:text-gray-400"
                  : "hover:text-gray-400"
              }
            >
              Milestones
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-red-800 font-bold hover:text-gray-400"
                  : "hover:text-gray-400"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-red-800 hover:text-gray-400"
                  : "hover:text-gray-400"
              }
            >
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* Social Links & Email Subscription */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-3">Connect with us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:opacity-80">
              <img src={instagram} alt="Instagram" className="w-8" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={LinkedIn} alt="LinkedIn" className="w-8" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={Facebook} alt="Facebook" className="w-8" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={TwitterX} alt="TwitterX" className="w-8" />
            </a>
          </div>

          {/* Email Subscription */}
          <form className="flex items-center">
            <input
              type="email"
              placeholder="abc@xyz.com"
              required
              className="bg-transparent border-2 border-gray-500 rounded-lg px-4 py-2 text-white placeholder-gray-400 w-2/3"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
