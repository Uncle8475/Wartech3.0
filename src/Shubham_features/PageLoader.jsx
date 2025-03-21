import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PageLoader = () => {
  gsap.registerPlugin(useGSAP); // Register the hook to avoid React version discrepancies
  const container = useRef();
  const aniChar = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(".loading_characters", {
      yPercent: 100, // Move up
      duration: 1.2, // Animation duration
      stagger: {
        each: 0.1,
        from: "center",
      }, // Delay between each character
      ease: "expo.out",
    })
      .to(
        ".loading_characters",
        {
          yPercent: -100, // Move up
          opacity: 1, // Fade in
          duration: 1, // Animation duration
          stagger: {
            each: 0.1,
            from: "center",
          }, // Delay between each character
          ease: "expo.inOut",
        },
        "+=1"
      )
      .to(container.current, {
        opacity: 0,
        scale: 0.2,
      });
  });

  return (
    <>
      <div
        ref={container}
        className="fixed top-0 bg-zinc-950 h-full w-full z-50 flex justify-center items-center  overflow-hidden "
      >
        <p className="loaderText bg-transparent inline-block overflow-hidden h-fit text-amber-100 text-5xl md:text-[200px] lg:text-[400px]">
          {["L", "O", "A", "D", "I", "N", "G"].map((char, index) => (
            <span key={index} className="loading_characters inline-block">
              {char}
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

export default PageLoader;
