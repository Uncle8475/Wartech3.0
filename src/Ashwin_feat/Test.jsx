import React from "react";
// import Squares from "../assets/background/Aurora";

import Aurora from "../assets/background/Aurora";
const FlipCard = ({ image, title, description }) => {
  return (
    <Aurora
      colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
  );
};

export default FlipCard;
