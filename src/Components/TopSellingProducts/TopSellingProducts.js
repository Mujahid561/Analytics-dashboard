
import React from 'react';
import {products} from "../../MockData/TopsellingProductsMockData"

const TopSellingProducts = ({darkMode}) => {

  return (
    <div className={` p-6 rounded-xl  mx-auto w-[100%] ${
          darkMode ? "text-white darkModecustumBG " : "text-black bg-gray-50 "
        }`}>
      <h2 className="text-base font-semibold mb-2">Top Selling Products</h2>
      <div className="overflow-x-auto w-[100%]  ">
        <table className="min-w-full  ">
          <thead>
            <tr className= {`${
          darkMode ? "border-b-[1px] border-gray-400" : "border-b-[1px]"

        }`} >
              <th className="text-left px-6 py-2 text-gray-400 font-light text-base">Name</th>
              <th className="text-left px-6 py-2 text-gray-400 font-light">Price</th>
              <th className="text-left px-6 py-2 text-gray-400 font-light">Quantity</th>
              <th className="text-left px-6 py-2 text-gray-400 font-light">Amount</th>
            </tr>
          </thead>
          <tbody  >
            {products.map((product, index) => (
              <tr key={index}>
                <td className= {`px-6 py-[10px] whitespace-nowrap text-sm  ${
          darkMode ? "text-white " : "text-gray-700 "
        }`}>{product.name}</td>
                <td className={`px-6 py-2 whitespace-nowrap text-sm ${
          darkMode ? "text-white " : "text-gray-700 "
        }`}>${product.price.toFixed(2)}</td>
                <td className={`px-6 py-2 whitespace-nowrap text-sm ${
          darkMode ? "text-white " : "text-gray-700 "
        }`}>{product.quantity}</td>
                <td className={`px-6 py-2 whitespace-nowrap text-sm ${
          darkMode ? "text-white " : "text-gray-700 "
        }`}>${product.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
