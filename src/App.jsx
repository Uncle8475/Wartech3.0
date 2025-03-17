import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./Layout";
import Home from "./Ashwin_feat/Home";
import AboutUs from "./Ashwin_feat/AboutUs";
import Events from "./Ashwin_feat/Events";
import Milestones from "./Ashwin_feat/Milestones";
import NotFound from "./Ashwin_feat/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<UserLayout />}>
        {/* <Route path="/TestPage" element={<TestPage />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Milestones" element={<Milestones />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
