import React from "react";
import worldImage from "../../Assets/worldMap.jpeg";
import darkworldImage from "../../Assets/darkWorlMap.jpeg";
import { locations } from "../../MockData/locationMockData";

const RevenueByLocation = ({ darkMode }) => {


  return (
    <div
      className={` max-w-sm p-4 py-2  rounded-xl h-[100%] ${
        darkMode ? "text-white darkModecustumBG " : "text-black bg-gray-50 "
      }`}
    >
      <h2 className="text-base font-semibold mb-2 text-center lg:text-sm xl:text-base">
        Revenue by Location
      </h2>
      <div className="flex justify-center mb-1">
        {darkMode ? (
          <img
            src={darkworldImage}
            alt="World Map"
            className="w-full h-auto mb-2 "
          />
        ) : (
          <img
            src={worldImage}
            alt="World Map"
            className="w-full h-auto mb-2 "
          />
        )}
      </div>
      <ul>
        {locations.map((location) => (
          <li key={location.name} className="mb-2">
            <div className="flex justify-between items-center text-sm ">
              <span>{location.name}</span>
              <span>{(location.revenue / 1000).toFixed(0)}K</span>
            </div>

            <span className="flex h-1 rounded-full border-transparent bg-gray-300 ">
              <span
                className="block h-full bg-blue-400 rounded-full border-transparent "
                style={{
                  width: `${(location.revenue / 100000) * 100}%`,
                  background: "#A8C5DA",
                }}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevenueByLocation;
