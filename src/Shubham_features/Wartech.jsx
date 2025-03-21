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


gsap.registerPlugin(ScrollTrigger);

const eventImages = [
  {
    name: "RC Racing",
    title: "RC Racing",
    image: "rcRacing.jpg",
    registerLink: "/register/rcRacing",
    about:
      "Race your RC cars on a challenging track and compete for the fastest time.",
  },
  {
    name: "Drone Drag",
    title: "Drone Racing",
    image: "droneDrag.jpg",
    registerLink: "/register/droneDrag",
    about: "Test your drone's speed and agility in a thrilling drag race.",
  },
  {
    name: "Line Follower",
    title: "Maze Solver",
    image: "lineFollower.jpg",
    registerLink: "/register/lineFollower",
    about:
      "Program your robot to follow a line and navigate through obstacles.",
  },
  {
    name: "Pick and Place",
    title: "Pick and Place Challenge",
    image: "pickAndPlace.jpg",
    registerLink: "/register/pickAndPlace",
    about:
      "Build a robot that can pick up objects and place them in designated areas.",
  },
  {
    name: "Robo Sumo",
    title: "Robo Sumo",
    image: "roboSumo.jpg",
    registerLink: "/register/roboSumo",
    about:
      "Compete in a sumo-style match with your robot and push your opponent out of the ring.",
  },
  {
    name: "RC Racing",
    title: "RC Racing",
    image: "rcRacing.jpg",
    registerLink: "/register/rcRacing",
    about:
      "Race your RC cars on a challenging track and compete for the fastest time.",
  },
];

const Wartech = () => {
  const eventsListRef = useRef(null);
  const dateRef = useRef(null);
  const rocketRef = useRef(null);
  const announcementRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the loader is visible for at least 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.to(eventsListRef.current, {
        x: "-70%", // Moves to the right
        color: "rgba(0,0,0)",
        backgroundColor: "rgba(225,225,225)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: eventsListRef.current,
          scroller: "body",
          start: "top 0%",
          end: "top -150%",
          scrub: 2, // Smooth animation while scrolling
          pin: true,
          markers: false, // Debug markers (set true for testing)
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
            // scrub: 2, // Smooth animation while scrolling
            markers: false, // Debug markers (set true for testing)
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
            scrub: 2, // Smooth animation while scrolling
            markers: false, // Debug markers (set true for testing)
          },
        } 
      );

      gsap.fromTo(
        announcementRef.current,
        { backgroundColor: "transparent" },
        {
          // background:0.7,
          backgroundColor: "#040812",
          ease: "power2.in",
          scrollTrigger: {
            trigger: rocketRef.current,
            scroller: "body",
            start: "top 20%",
            end: "top -50%",
            scrub: 2, // Smooth animation while scrolling
            markers: false, // Debug markers (set true for testing)
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on unmount
      };
    }
  }, [loading]); // Runs only after the loader finishes

  return (
    <div className="h-full w-full ">
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <WartechNav />
          <div className="h-screen flex items-center justify-center bg-transparent flex-col ">
            <motion.div
              className="opacity-0"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 3, delay: 3 }}
            >
              <img
                className="h-32 object-contain"
                src="unstop_logo.png"
                alt=""
              />
              <h5 className="text-center">co-sponsor</h5>
            </motion.div>
            <motion.h1
              className="text-6xl md:text-9xl uppercase font-extrabold drop-shadow-2xl text-white"
              animate={{ scale: [2.5, 1] }}
              transition={{ duration: 4 }}
            >
              Wartech
            </motion.h1>
            <ClockCountDown />
            <motion.h3
              ref={dateRef}
              className="text-2xl md:text-4xl mt-10 font-extrabold drop-shadow-2xl text-white"
            >
              3<sup>rd</sup> - 6<sup>th</sup> April
            </motion.h3>
          </div>

          {/* prize pool reveal */}
          <div
            ref={announcementRef}
            className="relative flex  items-center justify-center bg-amber-100  flex-col"
          >
            <img
              ref={rocketRef}
              className="rocket  object-cover h-[110vh]"
              src={rocketImg}
              alt=""
            />


            <div className="h-screen w-screen p-10 content-center">
              <div className="w-full flex flex-col items-start">
                <h1 className="text-amber-200 md:text-[4rem] max-w-full text-left">
                  Prize Pool of 2 lac+
                </h1>
                <button className="bg-rose-700 text-white px-3 py-2 rounded-md mt-10 w-1/5">
                  See more
                </button>
              </div>
            </div>


            <div className="h-screen w-screen p-10 content-center">
              <div className="w-full flex flex-col items-end">
                <h1 className="text-lime-400 md:text-[4rem] w-5/12 text-right ">
                  More than 13+ Events{" "}
                </h1>
                <button className="bg-rose-700 text-white px-3 py-2 w-1/5 rounded-md mt-10 ">
                  See more
                </button>
              </div>
            </div>


            <div className="h-screen w-screen p-10 content-center">
              <div  className="w-full flex flex-col items-start">
              <h1 className="text-teal-200 md:text-[4rem] leading-snug w-5/12 text-left">
                Both for College and School Students
              </h1>
              <button className="bg-rose-700 text-white px-3 py-2 rounded-md mt-10 w-1/5 ">
                See more
              </button>
              </div>
            </div>
          </div>

          {/* Events List - Moves Right on Scroll  */}
          <div
            ref={eventsListRef}
            className="events-container h-screen w-fit content-center whitespace-nowrap overflow-x-hidden mx-10"
          >
            {" "}
            <p className="flex gap-20 text-9xl font-bold">
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
              <span>EVENTS</span>
            </p>
            {eventImages.map((event, index) => (
              <div
                key={index}
                className="relative h-4/6 w-[1000px] bg-red-900 inline-block m-5 rounded-xl overflow-hidden"
              >
                <motion.img
                  src={`/event_images/${event.image}`}
                  //  Extracts filename for alt text
                  className="h-5/6 w-[1000px] object-cover hover:scale-110 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <h3 className="p-3 font-thin text-xl text-white">
                  Register To Participate
                </h3>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-red-900 to-blue-900 opacity-0 hover:opacity-70 transition duration-300">
                  <h3 className="text-white text-2xl">
                    {index + 1}. {event.name}{" "}
                  </h3>
                  <h5 className="p-3 text-lg text-white ">{event.about}</h5>
                  <Link
                    to={`/events/${event.title}`}
                    className="ml-4 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full opacity-100 hover:from-green-500 hover:to-blue-600 transition duration-300"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <FAQ />

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
