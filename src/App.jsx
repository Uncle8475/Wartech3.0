import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./Layout";
import Home from "./Ashwin_feat/Home";
import Milestones from "./Ashwin_feat/Milestones";
import NotFound from "./Ashwin_feat/NotFound";
import Wartech from "./Shubham_features/Wartech";
import Event from "./Ashwin_feat/Events";
import EventInfo from "./Ashwin_feat/EventInfo";
import "./Font.css";
import Test from "./Ashwin_feat/Test";
import EventDetail from "./Ashwin_feat/EventData";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<UserLayout />}>
        {/* <Route path="/TestPage" element={<TestPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/Milestones" element={<Milestones />} />
        <Route path="/test" element={<Test />} />
        <Route path="/events/:eventName" element={<EventDetail />} />
        <Route path="/register/:eventName" element={<EventInfo />} />
      </Route>
      <Route path="/Wartech" element={<Wartech />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
