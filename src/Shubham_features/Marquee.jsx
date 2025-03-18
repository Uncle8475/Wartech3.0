import { motion } from "framer-motion";

export default function Marquee({ text }) {
  return (
    <>
      <div className="w-full overflow-hidden whitespace-nowrap bg-[#595e5d] rotate-6 md:rotate-2 text-white py-2 absolute bottom-20 cursor-default">
        <motion.div
          className="flex text-lg font-semibold"
          animate={{ x: ["-100%", 0] }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
          style={{ display: "inline-flex", minWidth: "100%" }}
        >
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mr-10">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
      <div className="w-full overflow-hidden whitespace-nowrap bg-[#ffa228] -rotate-3 md:-rotate-2 text-white py-2 absolute bottom-20 shadow-xl shadow-black border-black border-2 cursor-default">
        <motion.div
          className="flex text-lg font-semibold"
          animate={{ x: [0, "-100%"] }}
          transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
          style={{ display: "inline-flex", minWidth: "100%" }}
        >
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mr-10">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}
