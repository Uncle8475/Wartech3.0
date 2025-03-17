import { motion } from "framer-motion";

export default function Marquee({ text }) {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-gray-800 text-white py-2 absolute bottom-20">
      <motion.div
        className="flex text-lg font-semibold"
        animate={{ x: [0, "-100%"] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        style={{ display: "inline-flex", minWidth: "100%" }}
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="mr-10">{text}</span>
        ))}
      </motion.div>
    </div>
  );
}
