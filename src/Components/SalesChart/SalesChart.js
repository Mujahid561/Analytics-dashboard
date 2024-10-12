import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const SalesChart = ({darkMode}) => {
 
  const colors = {
    direct: '#000000',       
    affiliate: '#b4e4c7',    
    sponsored: '#d1c4f2',    
    email: '#d0efff',        
    background: '#f9fafb',   
    transparent: 'rgba(0, 0, 0, 0)', 
  };

  
  const data = {
    labels: ['Direct', 'Gap1', 'Affiliate', 'Gap2', 'Sponsored', 'Gap3', 'E-mail', 'Gap4'],
    datasets: [
      {
        label: 'Total Sales',
        data: [300.56, 10, 135.18, 10, 154.02, 10, 48.96, 10], 
        backgroundColor: [
          colors.direct, 
          colors.transparent, 
          colors.affiliate, 
          colors.transparent, 
          colors.sponsored, 
          colors.transparent, 
          colors.email,
          colors.transparent  
        ],
        hoverOffset: 0, 
        borderWidth: 0, 
      },
    ],
  };

  const options = {
    cutout: '70%', 
    rotation: 0, 
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  return (
    <div className= {` p-6 rounded-xl  w-full ${
            darkMode ? "text-white darkModecustumBG " : "text-black bg-gray-50"
          }`} >
      <h2 className="text-lg font-semibold  mb-4">Total Sales</h2>
      <div className="flex justify-center items-center mb-4"> 
        <div className="relative "> 
          <Doughnut data={data} options={options} style={{ maxWidth: '120px', maxHeight: '120px' }} />
          
        </div>
      </div>
      
      <div className="space-y-2">
        <div className= {`flex justify-between text-sm ${
            darkMode ? "text-white  " : "text-black "
          }`} >
          <span className="flex items-center">
            
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.direct }}></span>
            <span className="ml-2">Direct</span>
          </span>
          <span>$300.56</span>
        </div>
        <div className="flex justify-between text-sm ">
          <span className="flex items-center">
           
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.affiliate }}></span>
            <span className="ml-2">Affiliate</span>
          </span>
          <span>$135.18</span>
        </div>
        <div className="flex justify-between text-sm ">
          <span className="flex items-center">
            
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.sponsored }}></span>
            <span className="ml-2">Sponsored</span>
          </span>
          <span>$154.02</span>
        </div>
        <div className="flex justify-between text-sm ">
          <span className="flex items-center">
            
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.email }}></span>
            <span className="ml-2">E-mail</span>
          </span>
          <span>$48.96</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
