import React from "react";
import Chart from "react-apexcharts";

const ProjectChart = () => {
  const options = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "45%",
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "18px",
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "16px",
            offsetY: 10,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return "69%";
            },
          },
        },
        track: {
          background: "#f0f0f0",
        },
      },
    },
    labels: ["Project A", "Project B", "Project C"], // Label per ring
    colors: ["#F9C74F", "#43AA8B", "#277DA1"],
  };

  const series = [85, 79, 43]; // Percentage for each ring

  return (
    <div className="w-[300px]">
      <h2 className="text-xl font-semibold mb-4">Employee Working Hours</h2>
      <Chart options={options} series={series} type="radialBar" height={300} />
    </div>
  );
};

export default ProjectChart;
