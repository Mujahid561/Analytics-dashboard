
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { PiNotebookThin } from "react-icons/pi";
import { SearchBar } from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../Redux/DashboardReducer";

function Header() {
  const darkMode = useSelector((state) => state.dataReducer.darkMode);
  const dispatch = useDispatch();

  const handleDarkmode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={`w-full h-[6%] flex py-4 px-6 justify-between border-b-[1px] ${
          darkMode ? "text-white bg-black border-gray-600" : "text-black bg-white"
        }`}>
      <div className="flex gap-3 justify-center items-center">
        <PiNotebookThin aria-hidden="true" />
        <FaRegStar aria-hidden="true" />
        <h1>
          <span className="text-gray-400">Dashboards /</span> Default
        </h1>
      </div>
      <div className="flex gap-3 items-center">
        <SearchBar darkMode={darkMode} />
        <button 
          onClick={handleDarkmode} 
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          className="focus:outline-none " // Add focus styles for keyboard users
        >
          <BsFillBrightnessHighFill aria-hidden="true" />
        </button>
        <button 
          aria-label="Timer"
          className="focus:outline-none "
        >
          <RxCountdownTimer aria-hidden="true" />
        </button>
        <button 
          aria-label="Notifications"
          className="focus:outline-none "
        >
          <FaRegBell aria-hidden="true" />
        </button>
        <PiNotebookThin aria-hidden="true" />
      </div>
    </div>
  );
}

export default Header;
