import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import roboticsEvents from "../data/Eventdata";
import download from "../assets/others/download-minimalistic-svgrepo-com (2).svg";
import { motion } from "framer-motion";
const EventInfo = () => {
  const { eventName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!eventName) {
    return (
      <div className="text-red-500 text-center text-lg font-semibold mt-10">
        Error: Event name not provided
      </div>
    );
  }

  const event = roboticsEvents.find(
    (e) => e.title.toLowerCase() === eventName.toLowerCase()
  );

  if (!event) {
    return (
      <div className="text-red-500 text-center text-lg font-semibold mt-10">
        404 - Event Not Found
      </div>
    );
  }

  return (
    <div className=" space-y-12 min-h-screen flex flex-col items-center px-6 py-12 md:px-16 text-white pt-40 pb-20">
      <h2 className=" tracking-wider text-5xl  mb-1 text-center">
        {event.title}
      </h2>
      <p className="text-lg text-center max-w-3xl">{event.description}</p>

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* Rule Book Button */}
        <a
          href={`/rulebooks/Final_Rule_Book.pdf`}
          download
          className="flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-md transition-transform duration-200 hover:bg-red-700 hover:scale-105"
        >
          Rule Book
          <img className="ml-2 w-6 h-6" src={download} alt="Download Icon" />
        </a>

        {/* Register Button */}
        <a
          href={`/register/${eventName}`}
          className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-md transition-transform duration-200 hover:bg-blue-950 hover:scale-105"
        >
          Register
        </a>
      </div>

      {/* Extra Images */}
      {event.extraimg &&
        Array.isArray(event.extraimg) &&
        event.extraimg.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {event.extraimg.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Extra Arena Image ${index + 1}`}
                className="w-80 rounded-lg shadow-lg"
              />
            ))}
          </div>
        )}

      {/* Event Details */}
      <div className="w-full max-w-4xl mt-10 space-y-6 ">
        <EventCard
          title="Arena"
          content={event.arena}
          backgroundImage={event.backgroundImage}
        />
        <EventCard
          title="Team Composition"
          content={event.teamComposition}
          backgroundImage={event.backgroundImage}
        />
        <EventCard
          title="Rules"
          content={event.robotMatchRules}
          backgroundImage={event.backgroundImage}
        />
        <EventCard
          title="Scoring & Penalties"
          content={event.scoringAndPenalties}
          backgroundImage={event.backgroundImage}
        />
        <EventCard
          title="Technical Aspects"
          content={event.technicalAspects}
          backgroundImage={event.backgroundImage}
        />
        <EventCard
          title="Restrictions"
          content={event.restrictions}
          backgroundImage={event.backgroundImage}
        />
      </div>
    </div>
  );
};

const EventCard = ({ title, content, backgroundImage }) => (
  <motion.div
    className="relative bg-zinc-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg p-6 shadow-md"
    style={{
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      backgroundSize: "contain",

      backgroundRepeat: "repeat",
      backgroundBlendMode: "overlay",
    }}
    whileHover={{ scale: 1.1 }} // Increases size on hover
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-300">{content}</p>
  </motion.div>
);

export default EventInfo;
