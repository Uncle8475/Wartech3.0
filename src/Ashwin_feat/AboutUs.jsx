import React from "react";
import aboutimg from "../assets/gallery/image3.jpg";
const AboutUs = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="bg-gray-900 text-white py-16 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Section - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-500 mb-4">About Us</h2>
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
