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
import { useAdminContext } from "../../contextApi/ContextApi";

const EmployeePieChart = () => {
  const { empData } = useAdminContext();
  console.log(empData);
  const female = empData.filter((fem) => fem.gender === "Female") || [];
  console.log("female", female);
  const data = [
    { name: "Male", value: empData.length - female.length },
    { name: "Female", value: female.length },
  ];
  const COLORS = ["#1CB5E0", "#F6339A"];
  return (
    <div className="py-4 rounded-md border border-black/15 w-[400px]">
      <div className="flex w-full  items-center px-4 justify-between">
        <span className="font-bold">Total Employees</span>
        <span className="text-2xl font-bold">{empData?.length || 0}</span>
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
