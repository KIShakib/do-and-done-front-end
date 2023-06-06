import React, { useState } from "react";
import topBG from "../../../assets/Wallpaper.jpg";

const TopBanner = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  const [currentTime, SetCurrentTime] = useState(time);
  const [currentDate, SetCurrentDate] = useState(date);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    SetCurrentTime(time);
  };
  const updateDate = () => {
    date = new Date().toLocaleDateString();
    SetCurrentDate(date);
  };

  setInterval(updateTime, 1000);
  setInterval(updateDate, 1000);

  return (
    <div className="">
      <div
        className="h-72 bg-center bg-cover lg:flex items-center md:flex justify-center"
        style={{ backgroundImage: `url(${topBG})` }}
      >
        <div className="lg:w-1/3 md:w-1/3 text-center">
          <h5 className="text-xl">
            “Each day I will accomplish one thing on my to list.”
          </h5>
        </div>
        <div className="lg:w-1/3 md:w-1/3 text-center">
          <h2 className="text-5xl font-bebas tracking-widest bg-primary bg-opacity-40 py-2 text-white">
            DO & DONE
          </h2>
        </div>
        <div className="lg:w-1/3 md:w-1/3 text-center">
          <h5 className="font-orbitron text-xl">{currentTime}</h5>
          <h5 className="font-orbitron">{currentDate}</h5>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default TopBanner;
