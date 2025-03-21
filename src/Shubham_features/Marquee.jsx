import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Marquee = () => {
  const boxRef = useRef(null);
  const hiRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  const words = [
    "Wartech 3.0",
    "Coming Soon!",
    "Stay Tuned",
    "3rd March - 6th March 2025...",
  ];

  useEffect(() => {
    // Blinking Cursor Animation
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.6,
    });

    // Box and Text Entrance Animation
    const boxTl = gsap.timeline();
    boxTl
      .to(boxRef.current, {
        duration: 1,
        width: "10vw",
        delay: 0.5,
        ease: "power4.inOut",
      })
      .from(
        hiRef.current,
        { duration: 1, y: "5vw", ease: "power3.out" },
        "-=0.5"
      )
      .to(boxRef.current, { duration: 1, height: "5vw", ease: "elastic.out" });

    // Typing Effect for Words
    const masterTl = gsap.timeline({ repeat: -1 }).pause();
    words.forEach((word) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(textRef.current, { duration: 2.5, text: word, ease: "power0.in" });
      masterTl.add(tl);
    });

    boxTl.eventCallback("onComplete", () => masterTl.play());
  }, []);

  return (
    <h1 className="mt-[-90px] relative font-lato text-[2.8vw] font-bold pl-[10vw] overflow-hidden text-gray-300">
      <span
        ref={boxRef}
        className="absolute bottom-0 bg-red-900 h-[1vw] w-0 z-[-1]"
      ></span>
      <span ref={hiRef} className="inline-block">
        Hello, There
      </span>
      <span ref={textRef} className="text-[2vw] font-normal pl-[1vw]"></span>
      <span ref={cursorRef} className="cursor">
        _
      </span>
    </h1>
  );
};

export default Marquee;
