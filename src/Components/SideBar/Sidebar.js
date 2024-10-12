import React, { useState } from "react";

import { sideBarData } from "../../MockData/MockData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import profile from "../../Assets/profile.jpeg";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";


const Sidebar = () => {
  const darkMode = useSelector((state) => state.dataReducer.darkMode);

  const [activeIndex, setActiveIndex] = useState({
    parentInd: 0,
    childInd: 0,
  });
  const [showChild, setShowChild] = useState(false);

  return (
    <div
      className={`min-h-screen w-[100%] p-4 xl:p-4 lg:p-1 flex flex-col ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
    
      <div className="flex items-center mb-5 ml-4">
        <img src={profile} alt="User" className="w-5 h-5 rounded-full" />
        <span className="ml-3 text-lg font-light">ByeWind</span>
      </div>

     
      <div className="mb-3">
        <div className="flex justify-between px-3 mb-1 pl-5">
          <span className="text-gray-500 mr-2 text-sm">Favorites</span>
          <span className={` text-sm ${darkMode?"text-gray-700":"text-gray-300"}`}>Recently</span>
        </div>
        <ul className="ml-2  text-sm pl-3">
          <li className="flex items-center">
            <span className="mr-2 text-2xl text-gray-500">•</span> Overview
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-2xl text-gray-500">•</span> Projects
          </li>
        </ul>
      </div>

      
      <div className="flex-grow ">
        <nav>
          <ul>
            {sideBarData.map((section, index) => (
              <li key={index} className="mb-5">
                
                <span className="text-sm text-gray-500 mb-2 block pl-5">
                  {section.header}
                </span>
                <ul className="ml-2">
                  {section.child.map((item, idx) => {
                    const IconComponent = item.logo;
                    const isActive =
                      activeIndex?.childInd === idx &&
                      activeIndex?.parentInd === index;

                    return (
                      <>
                        <Link
                          to={item?.path}
                          key={idx}
                          className="relative mt-3 "
                        >
                          <button
                            onClick={() => {
                              setActiveIndex({
                                parentInd: index,
                                childInd: idx,
                              });
                              setShowChild(!showChild);
                            }}
                            className={`flex items-center py-2 w-[100%] text-sm rounded-lg ${
                              isActive
                                ? darkMode
                                  ? "darkModecustumBG"
                                  : "bg-gray-100"
                                : ""
                            } ${darkMode ? "text-white" : "text-black"} ${
                               darkMode
                                  ? "hover:bg-[#262424]"
                                  : "hover:bg-gray-100"
                             
                            }`}
                          >
                            {item?.child ? (
                              <span className="text-gray-300 text-sm ml-2">
                                {showChild &&
                                activeIndex?.childInd === idx &&
                                activeIndex.parentInd === index
                                  ? <FaAngleDown />
                                  : <FaAngleRight />}
                              </span>
                            ) : (
                              <span className="text-sm ml-6">{""}</span>
                            )}
                            {isActive && (
                              <span
                                className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 rounded-full ${
                                  darkMode ? "bg-white" : "bg-black"
                                }`}
                              ></span>
                            )}
                            {IconComponent && (
                              <IconComponent className="mr-2 ml-2 text-lg" />
                            )}
                            {item.name}
                          </button>
                        </Link>
                        {showChild &&
                          activeIndex?.childInd === idx &&
                          activeIndex.parentInd === index && (
                            <div className="ml-[25%] mb-1">
                              {item?.child?.map((elem) => {
                                return <li className="mt-2">{elem?.name}</li>;
                              })}
                            </div>
                          )}
                      </>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
