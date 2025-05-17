// components/EmployeeLineChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example Employee Data
const data = [
  { date: "01 Jan", employees: 10 },
  { date: "31 Jan", employees: 13 },
  { date: "22 Feb", employees: 13 },
  { date: "15 Mar", employees: 15 },
  { date: "05 Apr", employees: 18 },
  { date: "26 Apr", employees: 12 },
  { date: "17 May", employees: 16 },
  { date: "08 Jun", employees: 22 },
  { date: "29 Jun", employees: 13 },
  { date: "20 Jul", employees: 19 },
];

const EmployeeLineChart = () => {
  return (
    <div className=" h-[200px] rounded-2xl border-black/15">
      <span className="px-4 py-4 font-bold">Employees Info</span>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="employees"
            stroke="url(#gradient)"
            strokeWidth={4}
            dot={{ r: 0, strokeWidth: 2, fill: "#fff" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1CB5E0" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeLineChart;
