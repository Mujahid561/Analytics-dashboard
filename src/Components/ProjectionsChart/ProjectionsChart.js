import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProjectionsChart = ({darkMode}) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actual',
        data: [13, 15, 9, 20, 11, 17],
        backgroundColor: 'rgba(168, 197, 218)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 3,
        barThickness: 20,
        maxBarThickness: 30,
      },
      {
        label: 'Projection',
        data: [8, 10, 6, 10, 4, 7],
        backgroundColor: 'rgba(195, 209, 219)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 3,
        barThickness: 20,
        maxBarThickness: 30,
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
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 14,
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
          callback: (value) => (value === 0 ? '0' : `${value}M`),
          color: '#6B7280',
          font: {
            size: 14,
          },
          padding: 15,
        },
        grid: {
          display: true,
          color: darkMode ? "#5c5a5a" : "#e5e7eb",
        },
        border: {
          color: 'transparent',
        },
      },
    },
  };

  return (
    <div className={` rounded-xl w-full h-[100%]  p-4 ${
          darkMode ? "text-white darkModecustumBG " : "text-black bg-gray-50"
        }`}>
      <header className="text-base font-semibold mb-4">Projections vs Actuals</header>
      <div className="w-full h-[168px] "> 
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProjectionsChart;
