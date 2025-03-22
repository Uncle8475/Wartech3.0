import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqs from "../data/faqData.json";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 py-12">
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center text-white">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-7xl relative z-10">
        {/* Floating Image */}
        <motion.img
          src="event_images/SpaceSuit.png"
          alt="Astronaut Suit"
          className="w-64 md:w-1/3 h-auto object-cover rounded-lg drop-shadow-lg"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* FAQ List */}
        <div className="w-full md:w-1/2 space-y-4 mt-10 md:mt-0">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full max-w-lg mx-auto">
              <button
                className="w-full p-4 text-left text-lg font-semibold bg-black text-white rounded-t-lg transition-all duration-300 hover:bg-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="p-4 bg-gray-700 text-gray-200 rounded-b-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Large Metallic FAQs Background */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none z-0">
        <h3
          className="text-[25vw] md:text-[20vw] font-bold uppercase opacity-10"
          style={{
            background: "linear-gradient(135deg, #b8b8b8, #4a4a4a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 10px rgba(255, 255, 255, 0.2)",
          }}
        >
          FAQs
        </h3>
      </div>
    </div>
  );
};

export default FAQ;
