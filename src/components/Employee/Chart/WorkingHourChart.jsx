import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Sunday", hours: 0 },
  { day: "Monday", hours: 8 },
  { day: "Tuesday", hours: 7 },
  { day: "Wednesday", hours: 8 },
  { day: "Thursday", hours: 6 },
  { day: "Friday", hours: 7 },
];

const WorkingHourChart = () => {
  return (
    <div className="w-full h-96 p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Employee Working Hours</h2>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis
            label={{ value: "Hours", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" fill="#003170" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkingHourChart;
