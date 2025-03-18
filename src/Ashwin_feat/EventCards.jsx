import React, { useEffect, useRef } from "react";

const EventCards = () => {
  const scrollContainerRef = useRef(null);

  // Horizontal scrolling on vertical scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollFactor = 1.5; // Adjust speed of horizontal scroll
        scrollContainerRef.current.scrollLeft = window.scrollY * scrollFactor;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="events-container h-[300px] flex items-center overflow-x-auto whitespace-nowrap bg-gray-800 px-4"
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="h-96 w-96 bg-red-900 inline-block m-3 rounded-lg shadow-lg"
        ></div>
      ))}
    </div>
  );
};

export default EventCards;
