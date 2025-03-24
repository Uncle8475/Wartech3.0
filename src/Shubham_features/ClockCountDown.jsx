import React, { Component } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function ClockCountDown({ mobile }) {
  if (mobile) {
    return (
      <div className="flex flex-col items-center justify-center">
        <FlipClockCountdown
          to={"2025-04-03T07:59:59"}
          separatorStyle={{ color: "red", size: "6px" }}
          // digitBlockStyle ={{color: "white"}}
          digitBlockStyle={{ width: 30, height: 60, fontSize: 30 }}
        >
          Finished
        </FlipClockCountdown>
      </div>
    );
  }
  return (
    <>
      <FlipClockCountdown
        to={"2025-04-03T23:59:59"}
        separatorStyle={{ color: "red", size: "6px" }}
        digitBlockStyle={{ color: "white" }}
      >
        Finished
      </FlipClockCountdown>
    </>
  );
}

export default ClockCountDown;
