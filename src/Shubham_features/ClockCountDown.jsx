import React, { Component } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function ClockCountDown() {
  return (
    <>
      <FlipClockCountdown to={"2025-04-03T23:59:59"} 
        separatorStyle={{ color: "red", size: "6px" }}
        digitBlockStyle ={{color: "white"}}
        >
        Finished
      </FlipClockCountdown>
    </>
  );
}

export default ClockCountDown;
