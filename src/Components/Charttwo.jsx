import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MarieCurieChart = () => {
  // Data for key events and achievements in Marie Curie's life
  const data = {
    labels: ['1867-1872', '1883', '1891', '1895', '1903', '1906', '1911', '1934'],
    datasets: [
      {
        label: 'Personal Losses',
        data: ['mẹ mat', 20, 0, 30, 10, 50, 0, 0], // Mother's death, husband's death, etc.
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red for losses
      },
    //   {
    //     label: 'Discrimination',
    //     data: [0, 30, 40, 0, 20, 0, 30, 0], // Discrimination events
    //     backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue for discrimination
    //   },
      {
        label: 'Achievements',
        data: ['10', 0, 30, 20, 50, 0, 70, 100], // Key achievements (studies, Nobel Prizes)
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Green for achievements
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Marie Curie’s Struggles and Achievements',
        
      },
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Marie Curie: Perseverance through Hardship</h2>
      <Bar data={data} options={options} />
    </div>
  );
};
  <div>
    <p>10:Mother died-balan was torn. | Well studie.</p>
   
  </div>
export default MarieCurieChart;
