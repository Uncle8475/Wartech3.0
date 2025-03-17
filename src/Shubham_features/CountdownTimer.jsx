import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ y: [0, -10, 0] }} // Bounce effect
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="fixed bottom-4 right-4 z-10 h-20 bg-white/40 text-black flex flex-col items-center justify-center font-bold backdrop-blur-md p-3 rounded-lg shadow-lg text-lg"
    >
      <h3 className="bg-gradient-to-r text-xl from-purple-900 via-orange-600 to-red-500 bg-clip-text text-transparent">
        WARTECH LAUNCH
      </h3>
      {timeLeft.days}days : {timeLeft.hours} hours : {timeLeft.minutes} mins :{" "}
      {timeLeft.seconds}s
    </motion.div>
  );
}
