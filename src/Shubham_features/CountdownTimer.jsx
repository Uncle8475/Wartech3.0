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
        minutes: Math.floor((difference / (1000 * 60)) % 60), // Fixed the extra parenthesis
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
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="fixed bottom-4 right-4 z-10 bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/10"
    >
      <h3 className="text-sm font-semibold text-gray-800 mb-2">
        WARTECH LAUNCH IN
      </h3>
      <div className="flex items-center gap-2">
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-900">
            {timeLeft.days}
          </span>
          <span className="text-xs text-gray-600 block">DAYS</span>
        </div>
        <span className="text-xl text-gray-500">:</span>
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-900">
            {timeLeft.hours}
          </span>
          <span className="text-xs text-gray-600 block">HOURS</span>
        </div>
        <span className="text-xl text-gray-500">:</span>
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-900">
            {timeLeft.minutes}
          </span>
          <span className="text-xs text-gray-600 block">MINS</span>
        </div>
        <span className="text-xl text-gray-500">:</span>
        <div className="text-center">
          <span className="text-2xl font-bold text-gray-900">
            {timeLeft.seconds}
          </span>
          <span className="text-xs text-gray-600 block">SECS</span>
        </div>
      </div>
    </motion.div>
  );
}
