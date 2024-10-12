
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchBar } from '../SearchBar/SearchBar';
import { FaPlus } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import { PiArrowsDownUpLight } from "react-icons/pi";
import { orders } from '../../MockData/ordersMockData';



const OrdersData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const darkMode = useSelector((state) => state.dataReducer.darkMode);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header className="text-xl font-bold mb-5 ml-2">Order List</header>

      <div className={`p-2 rounded-lg flex mb-6 justify-between ${darkMode ? "darkModecustumBG" : "bg-gray-50"}`}>
        <div className='flex justify-center items-center ml-3 gap-4 text-xl'>
          <button aria-label="Add Order">
            <FaPlus />
          </button>
          <button aria-label="Filter Orders">
            <IoFilterSharp />
          </button>
          <button aria-label="Sort Orders">
            <PiArrowsDownUpLight />
          </button>
        </div>
        <div><SearchBar darkMode={darkMode} transparent={"transparent"} /></div>
      </div>

      {/* Table */}
      <table
        className={`min-w-full rounded-lg overflow-hidden ${darkMode ? "text-white bg-black" : "text-black bg-white"}`}
        role="table"
        aria-label="Order Table"
      >
        <thead className={`${darkMode ? "bg-black border-b-[1px] border-gray-500" : "bg-white border-b-[1px] border-gray-100"}`}>
          <tr role="row">
            <th className='text-left px-3'><input type="checkbox" className={`w-4 h-4 text-left ${darkMode ? 'accent-[#C6C7F8]' : 'accent-black'}`} aria-label="Select all orders" /></th>
            <th className="px-2 py-1 text-left text-gray-400 font-light">Order ID</th>
            <th className="px-2 py-1 text-left text-gray-400 font-light">User</th>
            <th className="px-2 py-1 text-left text-gray-400 font-light">Project</th>
            <th className="px-2 py-1 text-left text-gray-400 font-light">Address</th>
            <th className="px-2 py-1 text-left text-gray-400 font-light">Date</th>
            <th className="px-2 py-1 text-left text-gray-400 font-light">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} role="row" className={`${darkMode ? "border-b-[1px] border-gray-500" : "border-b-[1px] border-gray-100"} ${
                               darkMode
                                  ? "hover:bg-[#262424]"
                                  : "hover:bg-gray-100"
                             
                            }`}>
              <td className="pl-3">
                <input type="checkbox" className={`w-4 h-4 ${darkMode ? 'accent-[#C6C7F8]' : 'accent-black'}`} aria-label={`Select order ${order.id}`} />
              </td>
              <td className="px-2 py-1">{order.id}</td>
              <td className="px-2 py-1 flex" aria-label={`User: ${order.user}`}>
                <span className='mr-2'>
                  <img src={order.img} alt={`Profile of ${order.user}`} className="rounded-full w-6 h-6" />
                </span>{order.user}
              </td>
              <td className="px-2 py-1">{order.project}</td>
              <td className="px-2 py-1">{order.address}</td>
              <td className="px-2 py-1">{order.date}</td>
              <td className={`px-2 py-1 ${order.statusColor}`}>
                <span className='mr-1 text-2xl'>•</span>{order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <nav className="flex justify-end items-center space-x-2 mt-4" aria-label="Pagination Navigation">
        <button
          className="text-gray-600 hover:text-black"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          {"<"}
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded-lg ${currentPage === page ? darkMode ? 'darkModecustumBG text-white' : "text-black bg-slate-100" : currentPage !== page ? darkMode ? "bg-black text-white" : "bg-white text-black" : ""}`}
            onClick={() => handlePageClick(page)}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        ))}
        <button
          className="text-gray-600 hover:text-black"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === 5}
          aria-label="Next Page"
        >
          {">"}
        </button>
      </nav>
    </div>
  );
};

export default OrdersData;
