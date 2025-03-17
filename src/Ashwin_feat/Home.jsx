import React, { useRef, useEffect } from "react";
// import "../style/App.css";
// import Events from "./Events";
import wave from "../assets/customdiv.svg";
// import Milestone from "./Milestones";
// import Aboutus from "./aboutus";
import { useLocation } from "react-router-dom";

const Home = () => {
  const eventRef = useRef(null);
  const aboutRef = useRef(null);
  const milestoneRef = useRef(null);
  const location = useLocation();

  //   useEffect(() => {
  //     if (location.hash === "#events" && eventRef.current) {
  //       eventRef.current.scrollIntoView({ behavior: "smooth" });
  //     } else if (location.hash === "#about" && aboutRef.current) {
  //       aboutRef.current.scrollIntoView({ behavior: "smooth" });
  //     } else if (location.hash === "#Milestones" && milestoneRef.current) {
  //       milestoneRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [location]);

  return <>hello</>;
};

export default Home;
