import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "./FAQ";
import PageLoader from "./PageLoader";
import { Link } from "react-router-dom";
import ClockCountDown from "./ClockCountDown";
import WartechNav from "./WartechNav";
import rocketImg from "/event_images/rocket.png";
import ImagePopup from "./PopUp";
import FlipCard from "./FlipCard";
import SponsersMar from "./SponsersMar";
gsap.registerPlugin(ScrollTrigger);

const eventImages = [
  {
    name: "RC Racing",
    title: "RC Racing",
    image: "rccar.png",
    about:
      "Race your RC cars on a challenging track and compete for the fastest time.",
  },
  {
    name: "Drone Drag",
    title: "Drone Racing",
    image: "drone.png",
    about: "Test your drone's speed and agility in a thrilling drag race.",
  },
  {
    name: "Line Follower",
    title: "Maze Solver",
    image: "lineFollower.jpg",
    about:
      "Program your robot to follow a line and navigate through obstacles.",
  },
  {
    name: "Pick and Place",
    title: "Pick and Place Challenge",
    image: "pick.png",
    about:
      "Build a robot that can pick up objects and place them in designated areas.",
  },
  {
    name: "Robo Sumo",
    title: "Robo Sumo",
    image: "sumo.png",
    about:
      "Compete in a sumo-style match with your robot and push your opponent out of the ring.",
  },
];

const Wartech = () => {
  const eventsListRef = useRef(null);
  const dateRef = useRef(null);
  const rocketRef = useRef(null);
  const announcementRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.to(eventsListRef.current, {
        x: "-45%",
        color: "rgba(0,0,0)",
        backgroundColor: "rgba(225,225,225)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: eventsListRef.current,
          scroller: "body",
          start: "top 0%",
          end: "top -150%",
          scrub: 2,
          pin: true,
          markers: false,
        },
      });

      gsap.fromTo(
        dateRef.current,
        { opacity: 0, y: 100 },
        {
          y: "-30%",
          opacity: 1,
          ease: "power2.elastic",
          scrollTrigger: {
            trigger: dateRef.current,
            scroller: "body",
            start: "top 75%",
            end: "top 60%",
            markers: false,
          },
        }
      );

      gsap.fromTo(
        rocketRef.current,
        { y: 0 },
        {
          transform: "translateY(-100%)",
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: rocketRef.current,
            scroller: "body",
            start: "top 0%",
            end: "top -520%",
            pin: true,
            scrub: 2,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        announcementRef.current,
        { backgroundColor: "transparent" },
        {
          backgroundColor: "#040812",
          ease: "power2.in",
          scrollTrigger: {
            trigger: rocketRef.current,
            scroller: "body",
            start: "top 20%",
            end: "top -50%",
            scrub: 2,
            markers: false,
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [loading]);

  return (
    <div className="h-full w-full">
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <WartechNav />
          <div className="h-screen flex items-center justify-center bg-transparent flex-col">
            <motion.div
              className="opacity-0"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 3, delay: 3 }}
            >
              <img
                className="h-20 md:h-32 object-contain"
                src="unstop_logo.png"
                alt=""
              />
              <h5 className="text-center text-sm md:text-base">co-sponsor</h5>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-9xl uppercase font-extrabold drop-shadow-2xl text-white"
              animate={{ scale: [2.5, 1] }}
              transition={{ duration: 4 }}
            >
              Wartech
            </motion.h1>
            <ClockCountDown />
            <motion.h3
              ref={dateRef}
              className="text-xl md:text-2xl lg:text-4xl mt-10 font-extrabold drop-shadow-2xl text-white"
            >
              3<sup>rd</sup> - 6<sup>th</sup> April
            </motion.h3>
          </div>

          {/* prize pool reveal */}
          <div
            ref={announcementRef}
            className="relative flex items-center justify-center bg-amber-100 flex-col"
          >
            <img
              ref={rocketRef}
              className="rocket object-cover h-[110vh]"
              src={rocketImg}
              alt=""
            />

            <div className="h-screen w-screen p-4 md:p-10 content-center">
              <div className="w-full flex flex-col items-start">
                <h1 className="text-amber-200 text-2xl md:text-4xl lg:text-6xl max-w-full text-left">
                  Prize Pool of 2 lac+
                </h1>
                <ImagePopup imageUrl="/public/Docs/file_2025-03-21_23.33.40.png" />
              </div>
            </div>

            <div className="h-screen w-screen p-4 md:p-10 content-center">
              <div className="w-full flex flex-col items-end">
                <h1 className="text-lime-400 text-2xl md:text-4xl lg:text-6xl w-full md:w-5/12 text-right">
                  More than 13+ Events
                </h1>
                <ImagePopup imageUrl={"/public/Docs/poster final.png"} />
              </div>
            </div>

            <div className="h-screen w-screen p-4 md:p-10 content-center">
              <div className="w-full flex flex-col items-start">
                <h1 className="text-teal-200 text-2xl md:text-4xl lg:text-6xl w-full md:w-5/12 text-left">
                  Both for College and School Students
                </h1>
                <ImagePopup
                  imageUrl={
                    "/public/Docs/WhatsApp Image 2025-03-22 at 05.04.34_d01db75e.jpg"
                  }
                />
              </div>
            </div>
          </div>

          {/* Events List - Moves Right on Scroll */}
          <div
            ref={eventsListRef}
            className="events-container h-screen w-fit content-center whitespace-nowrap overflow-x-hidden mx-4 md:mx-10"
          >
            <p className="flex gap-4 md:gap-10 text-4xl md:text-6xl lg:text-9xl font-bold">
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
            </p>

            <div className="gap-4 md:gap-10 flex justify-center flex-wrap">
              {eventImages.map((event, index) => (
                <FlipCard
                  key={index}
                  title={event.title}
                  image={`/event_images/${event.image}`}
                  registerLink={`register/${event.title}`}
                  about={event.about}
                />
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ />
          <SponsersMar />
          {/* Background Video */}
          <section className="fixed top-0 left-0 w-full h-full z-[-1]">
            <video
              src="/bg-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            ></video>
          </section>
        </>
      )}
    </div>
  );
};

export default Wartech;
