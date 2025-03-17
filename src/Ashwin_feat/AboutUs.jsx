import React from "react";
import aboutimg from "../assets/gallery/image3.jpg";

const AboutUs = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="bg-[#0d0d0d] text-white py-16 px-6 md:px-12"
      >
        {/* Centered About Us Button */}
        <div className="flex justify-center pb-20 mb-6">
          <button className="px-8 py-4 text-2xl rounded-full border-2 border-[#8b1e1e] text-white bg-gradient-to-r from-[#300000] to-[#600000] transition-all duration-300 ease-in-out hover:scale-110">
            About Us
          </button>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Section - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              We are a passionate team dedicated to providing top-notch
              solutions that enhance user experiences and drive innovation. Our
              mission is to deliver quality products and services that make a
              difference.
            </p>

            <div className="mt-6 space-y-3">
              <p className="flex items-center text-gray-400">
                ✅ Quality-driven solutions
              </p>
              <p className="flex items-center text-gray-400">
                ✅ Customer-centric approach
              </p>
              <p className="flex items-center text-gray-400">
                ✅ Innovation & Excellence
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2">
            <img
              src={aboutimg}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
