import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import EventCards from "../Ashwin_feat/EventCards";

const Wartech = () => {
  const videoRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [reverse, setReverse] = useState(false);

  // Smooth Video Playback Effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frame;
    const step = 0.033; // ~30 FPS for smooth motion

    const playVideo = () => {
      if (!video) return;

      if (!reverse) {
        if (video.currentTime < video.duration) {
          video.currentTime = Math.min(
            video.currentTime + step,
            video.duration
          );
          frame = requestAnimationFrame(playVideo);
        } else {
          setReverse(true);
        }
      } else {
        if (video.currentTime > video.duration) {
          video.currentTime = Math.max(video.currentTime - step, 0);
          frame = requestAnimationFrame(playVideo);
        } else {
          setReverse(false);
        }
      }
    };

    frame = requestAnimationFrame(playVideo);
    return () => cancelAnimationFrame(frame);
  }, [reverse]);

  // Horizontal Scrolling on Vertical Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Overlay */}
      <div className="h-full w-full absolute opacity-10"></div>

      {/* Title Section */}
      <div className="h-screen flex items-center justify-center bg-transparent">
        <motion.h1
          style={{
            fontFamily: "Starjedi",
            color: "#FFE81F",
            textShadow: `
              -5px -5px 0px black, 
              4px -4px 0px black, 
              -5px 3px 0px black, 
              5px 5px 0px black, 
              
              
            `,
          }}
          className="text-4xl md:text-8xl uppercase font-thin drop-shadow-2xl"
        >
          Wartech
        </motion.h1>
      </div>

      {/* Events Section (Horizontal Scroll) */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto whitespace-nowrap"
      >
        <EventCards />
      </div>

      {/* Background Video */}
      <section className="fixed top-0 left-0 w-full h-full z-[-1]">
        <video
          ref={videoRef}
          src="/124685-731575433_large.mp4"
          preload="auto"
          playsInline
          muted
          autoPlay
          className="w-full h-full object-cover opacity-90"
        ></video>
      </section>
    </>
  );
};

export default Wartech;
