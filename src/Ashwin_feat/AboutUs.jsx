import React from "react";
import aboutimg from "../assets/gallery/image3.jpg";
import stroke from "../assets/BrushStroke.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const pref = useRef();
  const imgref = useRef();

  useGSAP(() => {
    gsap.from(pref.current, {
      scrollTrigger: {
        trigger: pref.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1.2,
      delay: 0.33,
    });
    gsap.from(imgref.current, {
      scrollTrigger: {
        trigger: imgref.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.33,
    });
  });

  return (
    <>
     <section
  id="about"
  className="text-white py-24 px-6 md:px-12 min-h-screen"
>
  {/* Centered Milestones heading */}
  <div className="flex justify-center w-full mb-12"> {/* Added wrapper div with flex justify-center */}
    <div
      className="flex items-center justify-center bg-contain bg-no-repeat bg-center cursor-default"
      style={{
        backgroundImage: `url(${stroke})`,
        backgroundSize: "100%", 
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-black text-4xl font-bold px-10 py-2"> {/* Adjusted padding */}
        About us
      </h1>
    </div>
  </div>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    <div ref={pref} className="md:w-1/2 text-center md:text-left">
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

    <div ref={imgref} className="md:w-1/2">
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
