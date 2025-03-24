import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import roboticsEvents from "../data/Eventdata";
import download from "../assets/others/download.svg";
import Aurora from "../assets/background/Aurora";
gsap.registerPlugin(ScrollTrigger);

const EventInfo = () => {
  const { eventName } = useParams();
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const imagesRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP Animations
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(buttonsRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });

    gsap.from(imagesRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      delay: 0.6,
      ease: "power3.out",
      stagger: 0.2,
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  if (!eventName) {
    return (
      <div className="text-red-500 text-center text-lg font-semibold mt-10">
        Error: Event name not provided
      </div>
    );
  }

  const event = roboticsEvents.find(
    (e) => e.title.toLowerCase().trim() === eventName.toLowerCase().trim()
  );

  if (!event) {
    return (
      <div className="text-red-500 text-center text-lg font-semibold mt-10">
        404 - Event Not Found
      </div>
    );
  }

  return (
    <>
      <div
        ref={containerRef}
        className="space-y-12 min-h-screen flex flex-col items-center px-6 py-12 md:px-16 text-white pt-40 pb-20 "
      >
        {/* Event Title */}
        <h2 ref={titleRef} className="tracking-wider text-5xl mb-1 text-center">
          {event.title}
        </h2>

        {/* Event Description */}
        <p ref={textRef} className="text-lg text-center max-w-3xl">
          {event.description}
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-4 mt-6">
          <a
            href="/Docs/Rule_Book.pdf"
            download="Rule_Book.pdf"
            className="flex items-center justify-center px-6 py-3 bg-red-800 text-white font-semibold rounded-md transition-transform duration-200 hover:bg-red-700 hover:scale-105"
          >
            Rule Book
            <img className="ml-2 w-6 h-6" src={download} alt="Download Icon" />
          </a>

          <a
            href="https://unstop.com/college-fests/wartech-30-army-institute-of-technology-ait-pune-334690"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-md transition-transform duration-200 hover:bg-blue-950 hover:scale-105"
          >
            Register
          </a>
        </div>
        <a
          href="#contact"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md transition-transform duration-200 hover:bg-yellow-600 hover:scale-105"
        >
          Organizer Details
        </a>

        {/* Extra Images */}
        {event.extraimg?.length > 0 ? (
          <div
            ref={imagesRef}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {event.extraimg.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Extra Arena Image ${index + 1}`}
                className="w-80 rounded-lg shadow-lg"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-4"></p>
        )}

        {/* Event Details */}
        <div className="w-full max-w-4xl mt-10 space-y-6">
          {[
            { title: "Arena", content: event.arena },
            { title: "Team Composition", content: event.teamComposition },
            { title: "Rules", content: event.robotMatchRules },
            {
              title: "Scoring & Penalties",
              content: event.scoringAndPenalties,
            },
            { title: "Technical Aspects", content: event.technicalAspects },
            { title: "Restrictions", content: event.restrictions },
          ].map((section, index) => (
            <EventCard
              key={index}
              title={section.title}
              content={section.content}
              backgroundImage={event.backgroundImage}
              ref={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
      <div
        id="contact"
        className="w-screen flex flex-col items-center bg-zinc-950 p-10 border-t-[1px]  border-zinc-500"
      >
        <h3 className="text-5xl font-semibold text-white mb-4 ">
          Contact Details
        </h3>
        <div className="mt-12 w-10/12 text-center pb-10 text-zinc-100 flex flex-col gap-6 md:flex-row justify-around items-center">
          {event.contacts.map((contact, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row  p-6 md:p-8 rounded-lg items-center justify-center gap-6 bg-zinc-900 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image */}
              <img
                className="rounded-full object-cover h-32 w-32 border-4 border-gray-400 shadow-md"
                src={contact.photo_link}
                alt={contact.name}
              />

              {/* Contact Info */}
              <div className="flex flex-col items-center md:items-start space-y-2">
                <h4 className="text-xl font-bold">{contact.name}</h4>
                <p className="text-sm text-gray-300">{contact.role}</p>

                {/* Clickable WhatsApp Number */}
                <a
                  href={contact.whatsapp_link}
                  className="text-zinc-400 text-base font-medium hover:text-zinc-400 transition-all"
                >
                  ✆ {contact.number}
                </a>

                <p className="text-sm text-gray-300">{contact.email}</p>
              </div>

              {/* Note */}
              <span className="absolute bottom-2 text-xs text-green-800">
                * Click the number to contact on WhatsApp
              </span>
            </div>
          ))}
        </div>

        <a
          href={""}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md transition-transform duration-200 hover:bg-green-700 hover:scale-105 flex items-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Icon"
            className="w-6 h-6 mr-2"
          />
          Join WhatsApp Group
        </a>
      </div>

      <section className="fixed top-0 left-0 w-full h-full z-[-1] bg-zinc-950">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </section>
    </>
  );
};

const EventCard = React.forwardRef(
  ({ title, content, backgroundImage }, ref) => (
    <motion.div
      ref={ref}
      className="relative bg-zinc-900 bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-lg p-6 shadow-md"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{content}</p>
    </motion.div>
  )
);

export default EventInfo;
