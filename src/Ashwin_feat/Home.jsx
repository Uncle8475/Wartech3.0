import React from "react";
import aitimg from "../assets/aitcampus-C7eKMdt2.jpg";
import wave from "../assets/customdiv.svg";
import AboutUs from "./AboutUs";
import Gallary from "./Gallary";
import Marquee from "../Shubham_features/Marquee";
import CountdownTimer from "../Shubham_features/CountdownTimer";

const Home = () => {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center h-screen w-full text-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${aitimg})` }}
      >
        <CountdownTimer targetDate="2025-04-03T23:59:59" />
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white">
          Center of Excellence for
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          AI and Robotics
        </p>

        {/* Wave acting as a bottom boundary */}
        <img
          src={wave}
          className="absolute bottom-0 left-0 w-full -mb-8"
          alt="Wave Boundary"
        />
        <Marquee
          text="Wartech 3.0 Coming soon! Stay Tuned 3rd March - 6th March 2025. 🚀"
        />

        <div></div>
      </div>
      <AboutUs />
      <Gallary />
    </>
  );
};

export default Home;
