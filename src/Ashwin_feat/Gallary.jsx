import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Import images from assets/gallery
import img1 from "../assets/gallery/image1.jpg";
import img2 from "../assets/gallery/image2.jpg";
import img3 from "../assets/gallery/image3.jpg";
import img4 from "../assets/gallery/image4.jpg";
import img5 from "../assets/gallery/image5.jpg";
import img6 from "../assets/gallery/image6.jpg";
import img7 from "../assets/gallery/image7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const gallRef = useRef();
  useGSAP(() => {
    gsap.from(gallRef.current, {
      scrollTrigger: {
        trigger: gallRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.33,
    });
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [length ,current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="bg-[#0d0d0d] container mb-20 mx-auto px-4 py-10 flex flex-col items-center">
      <div className="flex justify-center pb-20 mb-1">
        <button className="px-8 py-4 text-2xl rounded-full border-2 border-[#8b1e1e] text-white bg-gradient-to-r from-[#300000] to-[#600000] transition-all duration-300 ease-in-out hover:scale-110">
          Gallary
        </button>
      </div>

      <div
        ref={gallRef}
        className="relative w-full max-w-3xl h-80 overflow-hidden rounded-lg shadow-lg"
      >
        {/* Slide Transition */}
        <motion.img
          key={current}
          src={images[current]}
          alt={`Gallery ${current + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          ❯
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
