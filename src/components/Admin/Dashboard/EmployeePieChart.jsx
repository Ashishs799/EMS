// components/EmployeePieChart.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data: employee distribution by department
const data = [
  { name: "Male", value: 15 },
  { name: "Female", value: 12 },
];

// Define custom colors
const COLORS = ["#1CB5E0", "#F6339A"];

const EmployeePieChart = () => {
  return (
    <div className="py-4 rounded-md border border-black/15 w-[400px]">
      <div className="flex w-full  items-center px-4 justify-between">
        <span className="font-bold">Total Employees</span>
        <span className="text-2xl font-bold">27</span>
      </div>
      <ResponsiveContainer height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeePieChart;
