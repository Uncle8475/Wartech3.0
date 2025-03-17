import React from "react";
import { motion } from "framer-motion";

const Wartech = () => {
  return (
    <>
      <div className="h-full w-full absolute  opacity-10"></div>
      <div className="h-screen flex items-center justify-center bg-transparent">
        <motion.h1 className="text-6xl md:text-9xl uppercase font-extrabold drop-shadow-2xl text-white">
          Wartech
        </motion.h1>
      </div>

      <div className="events-container h-full content-center whitespace-nowrap  overflow-hidden bg-white">
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3" ></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
      </div>


      {/* background video of space in loop */}
      <section className="fixed top-0 left-0 w-full h-full z-[-1] ">
        <video
          src="/bg-video.mp4"
          autoPlay
          loop
          preload="auto"
          playsInline
          muted
          className="w-full h-full object-cover opacity-90"
        ></video>
      </section>
    </>
  );
};

export default Wartech;
