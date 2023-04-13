import React from "react";
import { Routes, Route } from "react-router-dom";

import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";

import { Navbar, Sidebar } from "./components";
const App = () => {
  return (
    <div className="relative bg-[#13131a] sm:-8 p-4 flex flex-row min-h-screen  ">
      <div className="sm:flex hidden mr-10 relative text-white">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
