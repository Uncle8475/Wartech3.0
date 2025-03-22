import React from "react";
import eventsData from "../data/Eventdata";
import { Link } from "react-router-dom";
import "./Eventss.css";
function Events() {
  console.log(eventsData);

  if (!Array.isArray(eventsData)) {
    return (
      <p className="text-red-600 text-center font-bold">
        Error: eventsData is not an array
      </p>
    );
  }

  return (
    <>
      <div
        id="events"
        className=" w-full h-screen flex flex-col items-center justify-center text-white text-center p-8"
      >
        <button className=" px-8 py-0 text-2xl rounded-full border-2 border-[#8b1e1e] text-white bg-gradient-to-r from-[#300000] to-[#600000] transition-all duration-300 ease-in-out hover:scale-110">
          Events
        </button>
        <h1 className=" pt-10 text-5xl font-bold mt-4">WARTECH</h1>
        <p className="text-lg mt-2 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          aperiam reiciendis voluptate pariatur labore impedit! Architecto
          necessitatibus eaque laudantium dolorem qui. Dignissimos, nihil!
        </p>
      </div>

      {/* Event Cards in a 4-column Grid with Side Padding */}
      <div
        id="event-list"
        className=" event-img pb-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-10 lg:px-16 text-white mb-60 ml-20 mr-20"
      >
        {eventsData.map((event, index) => (
          <div
            key={index}
            className={`event-box  p-6 h-80 rounded-sm shadow-lg transition-all duration-300 border border-gray-400
      hover:bg-[linear-gradient(30deg,rgb(97,6,6),rgb(0,0,0,1))] 
      hover:scale-105 hover:z-10 hover:rounded-md]
                ${index < 4 ? "border-t-0" : ""} 
                ${index >= eventsData.length - 4 ? "border-b-0" : ""}`}
          >
            <Link to={`/events/${event.title}`} className="block ">
              {/* Event Icon with Ring */}
              <img
                src={event.img}
                alt={event.title}
                className=" event-img w-10 h-10 object-cover rounded-full border-1 border-gray-300 ring-2 ring-gray-300 p-1 ml-2 mt-5 mb-10 transition-all duration-200 hover:grayscale hover:brightness-75"
              />
              <div className="text-left pl-4">
                <h2 className="text-lg ">{event.title}</h2>
                <p className="mt-5  text-gray-400">{event.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Events;
