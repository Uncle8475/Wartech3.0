import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import milestoneImage1 from "../assets/bagroundmilestone.png";
import milestoneImage2 from "../assets/WhatsApp Image 2023-10-28 at 13.57 1.png";
import "./milestone.css";
import stroke from "../assets/BrushStroke.png";
import cardbg from "../assets/bgnew/carbg2.jpg";
gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    imgSrc: milestoneImage1,
    title: "1st Position in IIT Bombay Techfest - Meshmerize",
    description:
      "We bagged 1st position in Mesmerize by the team from RnD cell in collaboration with CEAR, making the name of AIT known to all the top colleges in the IIT Bombay Techfest.",
  },
  {
    imgSrc: milestoneImage1,
    title: "2nd Place in National Robotics Championship",
    description:
      "Our team secured 2nd place in the National Robotics Championship, showcasing innovation and technical excellence in autonomous robotics.",
  },
  {
    imgSrc: milestoneImage2,
    title: "Finalists in International Drone Competition",
    description:
      "We reached the finals of the International Drone Competition, competing against some of the best drone tech innovators from across the globe.",
  },
  {
    imgSrc: milestoneImage2,
    title: "Winners of AI Hackathon 2024",
    description:
      "Our team developed an AI-powered traffic management system and won 1st place in the 2024 AI Hackathon, beating over 100 teams worldwide.",
  },
  {
    imgSrc: milestoneImage2,
    title: "Best Innovation Award - TechExpo 2023",
    description:
      "We received the 'Best Innovation Award' at TechExpo 2023 for our groundbreaking robotic prosthetic limb with real-time sensory feedback.",
  },
  {
    imgSrc: milestoneImage2,
    title: "Top 5 in International RoboRace",
    description:
      "Our high-speed autonomous racing bot finished in the Top 5 at the prestigious International RoboRace event, competing with teams from 15+ countries.",
  },
  {
    imgSrc: milestoneImage2,
    title: "Gold Medal in National Drone Swarm Competition",
    description:
      "We won the Gold Medal in the National Drone Swarm Challenge, demonstrating exceptional coordination and precision in multi-drone flight formations.",
  },
  {
    imgSrc: milestoneImage2,
    title: "Champions in Autonomous Underwater Robotics Contest",
    description:
      "Our underwater robotic system excelled in complex navigation and object retrieval tasks, winning the top prize in the Autonomous Underwater Robotics Contest.",
  },
];

const Milestones = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Header text animation
    tl.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    // Delay before the milestone grid animation
    tl.from(gridRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power2.out",
    });

    // Staggered animation for milestone cards
    tl.from(cardsRef.current, {
      opacity: 0,
      x: 10,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="text-white">
      {/* Header Section */}
      <div
        id="events"
        className="w-full h-screen flex flex-col items-center justify-center p-8 text-white text-center"
        ref={sectionRef}
      >
        <div
          className=" w-fit  flex items-center  justify-center  bg-contain bg-no-repeat bg-center  cursor-default "
          style={{
            backgroundImage: `url(${stroke})`,
            backgroundSize: "100%", // Increase size (try 200% if needed)
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-black text-4xl font-bold pl-10 pr-10">
            Milestones
          </h1>
        </div>
        <h1 className="text-5xl font-bold pt-8 ">What All We Did</h1>
        <p className="text-lg  max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          aperiam reiciendis voluptate pariatur labore impedit! Architecto
          necessitatibus eaque laudantium dolorem qui. Dignissimos, nihil!
        </p>
      </div>

      {/* Milestones Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 pb-10"
      >
        {milestones.map((milestone, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative border  border-gray-600 rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl text-white text-center max-w-sm mx-auto backdrop-blur-lg overflow-hidden"
            style={{
              backgroundImage: `url(${cardbg})`, // Background image
              backgroundSize: "cover", // Cover the entire div
              backgroundPosition: "center", // Center the image
              backgroundRepeat: "no-repeat", // No repeating
            }}
          >
            {/* 🔹 Semi-transparent overlay to reduce background opacity */}
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

            {/* 🔹 Card Content (kept on top of overlay) */}
            <div className="relative z-10">
              <img
                src={milestone.imgSrc}
                alt={milestone.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-bold mt-4">{milestone.title}</h2>
              <p className="text-sm mt-2 text-gray-300">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
