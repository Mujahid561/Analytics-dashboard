import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/SideBar/Sidebar";
import Header from "../Components/Header/Header";
import NotificationBar from "../Components/NotificationBar/NotificationBar";
import { useSelector } from "react-redux";

const Layout = () => {
  const showNotification = useSelector((state) => state.dataReducer.showNatificationBar);
  const darkMode = useSelector((state) => state.dataReducer.darkMode);

  const baseClasses = "text-black bg-white";
  const darkModeClasses = darkMode ? "text-white bg-black" : baseClasses;
  const containerClasses = `flex w-full ${darkModeClasses}`;
  const contentClasses = `py-7 px-6 ${darkModeClasses}  ${darkMode ? "border-gray-600" : ""}`;

  return (
    <div className={containerClasses}>
      <div className="w-[14.5%] ">
        <Sidebar />
      </div>
      <div className={`flex-1 ${darkModeClasses} border ${darkMode ? "border-gray-600" : ""}`}>
        <Header />
        <div className={contentClasses}>
          <Outlet />
        </div>
      </div>
      {showNotification && (
        <div className="w-[19.5%] h-full ">
          <NotificationBar />
        </div>
      )}
    </div>
  );
};

export default Layout;
