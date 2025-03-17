import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./Layout";
import Home from "./Ashwin_feat/Home";
import AboutUs from "./Ashwin_feat/AboutUs";
import Milestones from "./Ashwin_feat/Milestones";
import NotFound from "./Ashwin_feat/NotFound";
import Wartech from "./Shubham_features/Wartech";
import "./";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<UserLayout />}>
        {/* <Route path="/TestPage" element={<TestPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Events" element={<Wartech />} />
        <Route path="/Milestones" element={<Milestones />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
