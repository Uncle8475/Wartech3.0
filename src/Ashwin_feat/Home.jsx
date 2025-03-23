import React, { useRef } from "react";
import aitimg from "../assets/aitcampus-C7eKMdt2.jpg";
import wave from "../assets/customdiv.svg";
import AboutUs from "./AboutUs";
import Gallary from "./Gallary";
import Marquee from "../Shubham_features/Marquee";
import CountdownTimer from "../Shubham_features/CountdownTimer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const mainHeadRefs = useRef([]); // Store multiple refs

  useGSAP(() => {
    gsap.from(mainHeadRefs.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      delay: 1.4,
      ease: "power2.out",
    });
  });

  return (
    <div className="bg-zinc-950">
      <div
        className="relative flex flex-col items-center justify-center h-screen w-full text-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${aitimg})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content (Ensures it's above overlay) */}
        <div className="relative z-10">
          <p
            ref={(el) => (mainHeadRefs.current[0] = el)}
            className="text-xl sm:text-2xl md:text-3xl lg:text-7xl font-thin text-white shadow-lg"
          >
            Center of Excellence for
          </p>
          <p
            ref={(el) => (mainHeadRefs.current[1] = el)}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            AI and Robotics
          </p>
        </div>

        {/* Wave acting as a bottom boundary */}
        <img
          src={wave}
          className="absolute  left-0 w-full bottom-[-90px]"
          alt="Wave Boundary"
        />
      </div>
      <Marquee text={"WarTech 3.0 announcement  3rd - 6th April 2025 "} />
      <AboutUs />
      <Gallary />
    </div>
  );
};

export default Home;
