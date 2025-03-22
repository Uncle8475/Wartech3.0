import { useRef, useEffect } from "react";
import gsap from "gsap";

const PageLoader = ({ isLoaded }) => {
  const container = useRef();

  useEffect(() => {
    let tl = gsap.timeline();

    tl.from(".loading_characters", {
      yPercent: 100,
      duration: 1.2,
      stagger: { each: 0.1, from: "center" },
      ease: "expo.out",
    }).to(
      ".loading_characters",
      {
        yPercent: -100,
        opacity: 1,
        duration: 1,
        stagger: { each: 0.1, from: "center" },
        ease: "expo.inOut",
      },
      "+=1"
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      gsap.to(container.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => gsap.set(container.current, { display: "none" }),
      });
    }
  }, [isLoaded]);

  return (
    <div
      ref={container}
      className="fixed top-0 left-0 w-full h-full bg-zinc-950 z-50 flex justify-center items-center overflow-hidden"
    >
      <p
        className="loaderText bg-transparent inline-block overflow-hidden h-fit text-amber-100 
        text-3xl sm:text-4xl md:text-7xl lg:text-[150px] xl:text-[200px]"
      >
        {["L", "O", "A", "D", "I", "N", "G"].map((char, index) => (
          <span key={index} className="loading_characters inline-block">
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default PageLoader;
