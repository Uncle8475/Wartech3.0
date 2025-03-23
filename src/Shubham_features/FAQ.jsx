import React, { useState } from "react";
import { motion } from "framer-motion";
import faqs from "../data/faqData.json";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" relative w-screen  bg-zinc-950 flex flex-col  p-10 pb-20 ">
      <h2 className="text-6xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full  overflow-visible flex flex-col md:flex-row  justify-around z-10">
        <motion.img
          src="event_images/SpaceSuit.png"
          alt="space_suit"
          className="w-1/3 h-1/2 my-auto object-cover rounded-lg"
          animate={{
            y: [0, -15, 0], // Moves up and down
          }}
          transition={{
            duration: 2, // Smooth floating effect
            repeat: Infinity, // Loops forever
            ease: "easeInOut", // Smooth transition
          }}
        />
        <div className="space-y-4 w-full mt-10 md:w-1/2 flex flex-col items-center ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" w-2/3 border rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 text-left font-semibold bg-black  hover:bg-gray-200 hover:text-black"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-500 border-t">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="h-full w-full absolute top-0 ">
        <h3 className="items-center content-center text-center font-bold text-[30vw] text-zinc-400">
          FAQs
        </h3>
      </div>
    </div>
  );
};

export default FAQ;
