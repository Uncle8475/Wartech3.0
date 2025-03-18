import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Wartech = () => {
  const videoRef = useRef(null);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    let frame;

    const playVideo = () => {
      if (!video) return;

      if (!reverse) {
        if (video.currentTime < video.duration) {
          video.currentTime += 0.033;
          frame = requestAnimationFrame(playVideo);
        } else {
          setReverse(true);
        }
      } else {
        if (video.currentTime > video.duration) {
          video.currentTime -= 0.033;
          frame = requestAnimationFrame(playVideo);
        } else {
          setReverse(false);
        }
      }
    };

    frame = requestAnimationFrame(playVideo);

    return () => cancelAnimationFrame(frame);
  }, [reverse]);

  return (
    <>
      <div className="h-full w-full absolute opacity-10"></div>
      <div className="h-screen flex items-center justify-center bg-transparent">
        <motion.h1
          style={{
            fontFamily: "Starjedi",
            color: "#FFE81F",
            textShadow: "0 0 0px #FFE81F, 0 0 0px #FFE81F, 0 0 10px #FFE81F",
          }}
          className="text-4xl md:text-8xl uppercase font-thin drop-shadow-2xl"
        >
          Wartech
        </motion.h1>
      </div>

      <div className="events-container h-full content-center whitespace-nowrap overflow-hidden bg-white">
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
        <div className="h-96 w-96 bg-red-900 inline-block m-3"></div>
      </div>

      {/* Background video with forward and reverse effect */}
      <section className="fixed top-0 left-0 w-full h-full z-[-1]">
        <video
          ref={videoRef}
          src="/124685-731575433_large.mp4"
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
