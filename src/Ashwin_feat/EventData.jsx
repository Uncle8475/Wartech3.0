import React from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import roboticsEvents from "../data/Eventdata";
import download from "../assets/download-minimalistic-svgrepo-com (2).svg";

function EventDetail() {
  const { eventName } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!eventName) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: Event name not provided
      </div>
    );
  }

  const event = roboticsEvents.find(
    (e) => e.title.toLowerCase() === eventName.toLowerCase()
  );

  if (!event) {
    return (
      <div className="text-red-500 text-center p-4">404 - Event Not Found</div>
    );
  }

  return (
    <div className="p-12 min-h-screen grid gap-12 justify-center items-center">
      <h2 className="text-5xl font-bold text-center">{event.title}</h2>
      <p className="text-center px-40">{event.description}</p>
      <div className="flex justify-center gap-4">
        <a
          href={`/rulebooks/Final_Rule_Book.pdf`}
          download
          className="flex items-center gap-2 bg-red-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-red-800 hover:scale-110"
        >
          Rule Book
          <img className="h-6 w-6" src={download} alt="download icon" />
        </a>
        <a
          href={`/register/${eventName}`}
          className="bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-blue-800 hover:scale-110"
        >
          Register
        </a>
      </div>
      {event.extraimg &&
        Array.isArray(event.extraimg) &&
        event.extraimg.length > 0 && (
          <div className="flex gap-5 justify-center flex-wrap my-5">
            {event.extraimg.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Extra Arena Image ${index + 1}`}
                className="max-w-xs rounded-lg shadow-lg"
              />
            ))}
          </div>
        )}
      <div className="bg-opacity-5 bg-gray-100 backdrop-blur-md border border-gray-300 rounded-xl p-6 w-3/5 mx-auto">
        <h3 className="text-2xl font-semibold">Arena</h3>
        <p className="mt-4">{event.arena}</p>
      </div>
      <div className="bg-opacity-5 bg-gray-100 backdrop-blur-md border border-gray-300 rounded-xl p-6 w-3/5 mx-auto">
        <h3 className="text-2xl font-semibold">Team Composition</h3>
        <p className="mt-4">{event.teamComposition}</p>
      </div>
      <div className="bg-opacity-5 bg-gray-100 backdrop-blur-md border border-gray-300 rounded-xl p-6 w-3/5 mx-auto">
        <h3 className="text-2xl font-semibold">Rules</h3>
        <p className="mt-4">{event.robotMatchRules}</p>
      </div>
      <div className="bg-opacity-5 bg-gray-100 backdrop-blur-md border border-gray-300 rounded-xl p-6 w-3/5 mx-auto">
        <h3 className="text-2xl font-semibold">Scoring & Penalties</h3>
        <p className="mt-4">{event.scoringAndPenalties}</p>
      </div>
      <div className="bg-opacity-5 bg-gray-100 backdrop-blur-md border border-gray-300 rounded-xl p-6 w-3/5 mx-auto">
        <h3 className="text-2xl font-semibold">Technical Aspects</h3>
        <p className="mt-4">{event.technicalAspects}</p>
      </div>
      <div className="bg-opacity-5 bg-gray-100 backdrop-blur-md border border-gray-300 rounded-xl p-6 w-3/5 mx-auto">
        <h3 className="text-2xl font-semibold">Restrictions</h3>
        <p className="mt-4">{event.restrictions}</p>
      </div>
    </div>
  );
}

export default EventDetail;
