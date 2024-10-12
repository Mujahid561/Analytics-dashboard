
import { FaSearch } from "react-icons/fa"; 
import { BsCommand } from "react-icons/bs";

export const SearchBar = ({ darkMode, transparent }) => {
  return (
    <div
      className={`flex items-center rounded-md p-1 ${
        darkMode
          ? transparent === "transparent"
            ? "bg-black border border-gray-600"
            : "text-white darkModecustumBG"
          : !darkMode && transparent === "transparent"
          ? "bg-white border border-gray-300"
          : "text-black bg-gray-100"
      }`}
    >
      
      <FaSearch
        className={`ml-2 ${darkMode ? "text-gray-500" : "text-black"}`}
        aria-hidden="true" 
      />
      
      
      <input
        type="text"
        placeholder="Search"
        className={`flex-1 px-2 ${
          darkMode
            ? transparent === "transparent"
              ? "bg-black text-white"
              : "text-white darkModecustumBG"
            : "text-black bg-transparent"
        }`}
        aria-label="Search input" 
        aria-describedby="searchHelp" 
      />

     
      {transparent !== "transparent" ? (
        <>
          <BsCommand
            className={`mr-1 ${darkMode ? "text-gray-500" : "text-black"}`}
            aria-hidden="true" 
          />
          <span
            className={`mr-2 ${darkMode ? "text-gray-500" : "text-black"}`}
            aria-hidden="true"
          >
            /
          </span>
        </>
      ) : null}
    </div>
  );
};
