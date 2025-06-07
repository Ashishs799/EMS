// BarChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Heading2 from "../Shared/heading2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ClientBarChart = () => {
  const data = [
    { month: "January", clients: 12 },
    { month: "February", clients: 18 },
    { month: "March", clients: 25 },
    { month: "April", clients: 20 },
    { month: "May", clients: 30 },
  ];

  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Number of Clients",
        data: data.map((item) => item.clients),
        backgroundColor: "#13A7D4",
        borderColor: "#0082B5",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Clients Bar Graph",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  // Mock hiring data for each department over 6 months
  const departmentHiring = {
    Development: [30, 25, 28, 20, 35, 40],
    Designing: [20, 15, 18, 12, 22, 25],
    Testing: [6, 2, 8, 5, 7, 3],
    SEO: [8, 6, 7, 5, 6, 8],
    Management: [12, 10, 11, 9, 14, 16],
    Marketing: [18, 14, 16, 12, 20, 24],
    Business: [14, 11, 12, 13, 15, 18],
  };

  const colors = [
    "#002566",
    "#0A9CCB",
    "#f53794",
    "#484C7F",
    "#FE9A00",
    "#166a8f",
    "#E12AFB",
    "#002566",
  ];

  const hiringChartData = {
    labels: months,
    datasets: Object.entries(departmentHiring).map(([dept, data], i) => ({
      label: dept,
      data,
      backgroundColor: colors[i % colors.length],
    })),
  };

  const hiringOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Hiring by Department (Jan - Jun)",
      },
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    barThickness: 30,
  };

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center items-start">
      <div className="w-full md:w-[48%] ">
        <Heading2 heading={"Top Clients"} />
        <div className="py-4 ">
          <Bar data={chartData} options={options} />
        </div>
      </div>
      <div className="w-full h-full md:w-[48%]">
        <Heading2 heading={"Top Hiring Departments"} />
        <div className="py-4 w-full">
          <Bar
            data={hiringChartData}
            options={hiringOptions}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientBarChart;
