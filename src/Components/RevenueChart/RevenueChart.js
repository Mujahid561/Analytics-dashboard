import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const RevenueChart = ({ darkMode }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Current Week",
        data: [15000000, 10000000, 11000000, 17000000, null, null],
        borderColor: darkMode ? "#C6C7F8" : "1C1C1C",
        borderWidth: 4,
        pointRadius: 0,
        fill: false,
        tension: 0.4,
        borderDash: [0, 0], 
      },
      {
        label: "Previous Week",
        data: [10000000, 18000000, 15000000, 12000000, 15000000, 23000000],
        borderColor: "#A8C5DA",
        backgroundColor: "#A8C5DA", 
        borderWidth: 4,
        pointRadius: 0,
        fill: true,
        tension: 0.4,
      },
      {
        label: "Projected",
        data: [null, null, null, 17000000, 22000000, 22000000],
        borderColor: darkMode ? "#C6C7F8" : "1C1C1C",
        borderWidth: 4,
        pointRadius: 0,
        fill: false,
        tension: 0.4,
        borderDash: [5, 5], 
      },
    ],
  };

  const options = {
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 30000000,
        ticks: {
          stepSize: 10000000, 
          callback: (value) => (value === 0 ? "0" : `${value / 1000000}M`),
          color: "#999999",
          padding: 15,
        },
        grid: {
          drawBorder: false,
          color: darkMode ? "#5c5a5a" : "#e5e7eb", 
        },
        border: {
          color: "transparent", 
        },
      },
      x: {
        offset: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#999999",
          align: "center", 
          padding: 8, 
        },
      },
    },
  };

  return (
    <div
      className={` px-[14px] pt-3 w-full h-full  rounded-xl  ${
        darkMode ? " darkModecustumBG " : " bg-gray-50"
      }`}
    >
      <div className="flex items-center mb-1 ">
        <h2
          className={` text-base font-semibold pl-4 ${
            darkMode ? "text-white  " : "text-black "
          } `}
        >
          Revenue <span className="text-gray-400 font-thin mx-5">|</span>
        </h2>
        <div className="text-sm space-x-4 ">
          <span className={` ${darkMode ? "text-white  " : "text-black "} `}>
            <span
              style={{ color: darkMode ? "#C6C7F8" : "#000000" }}
              className="text-2xl mr-1"
            >
              •
            </span>
            Current Week $58,211
          </span>
          <span className={`${darkMode ? "text-white  " : "text-black "}`}>
          <span
  style={{ color:  "#A8C5DA"  }}
  className="text-2xl mr-1"
>
  •
</span>
 Previous Week $68,768
          </span>
        </div>
      </div>
      <div className="h-[28vh] w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueChart;
