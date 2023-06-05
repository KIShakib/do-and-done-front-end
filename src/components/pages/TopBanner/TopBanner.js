import React from "react";
import topBG from "../../../assets/Wallpaper.jpg";

const TopBanner = () => {
  return (
    <div className="">
      <div
        className="h-72 bg-center bg-cover flex items-center"
        style={{ backgroundImage: `url(${topBG})` }}
      >
        <div className="w-1/3 text-center">
          <h5 className="text-xl">
            “Each day I will accomplish one thing on my to list.”
          </h5>
        </div>
        <div className="w-1/3 text-center">
          <h2 className="text-5xl font-bebas tracking-widest bg-primary bg-opacity-40 py-2 text-white">
            DO & DONE
          </h2>
        </div>
        <div className="w-1/3 text-center">
          <h5 className="font-orbitron text-xl">10 : 45 PM</h5>
          <h5 className="font-orbitron">June 4, 2023</h5>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default TopBanner;
