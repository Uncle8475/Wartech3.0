import React from "react";
import { motion } from "framer-motion";

const Wartech = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <motion.h1 className="text-6xl md:text-9xl uppercase font-extrabold drop-shadow-2xl text-white">
        Wartech
      </motion.h1>
    </div>
  );
};

export default Wartech;
