import React from "react";
import EmployeeLineChart from "./EmployeeLineChart";
import EmployeePieChart from "./EmployeePieChart";
import employeeData from "../Data/Data";
import UpcomingInterview from "../Interview/UpcomingInterview";
import ClientBarChart from "../Charts/BarChart";

const Dashboard = () => {
  const empData = employeeData;

  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      <EmployeeLineChart />
      <div className=" flex w-full justify-between gap-x-2">
        <div className=" px-4 py-6 flex flex-col gap-y-8 justify-between rounded-md border border-black/15">
          <span className=" font-bold">Employees Status</span>

          <div className=" flex items-center justify-between gap-4 w-[380px] flex-wrap  [&>*]:border [&>*]:border-black/15 [&>*]:w-[180px] [&>*]:h-[120px] [&>*]:px-3 [&>*]:py-4 [&>*]:flex [&>*]:flex-col [&>*]:items-start [&>*]:justify-center [&>*]:gap-y-2 [&>*]:text-sm [&>*]:font-bold [&>*]:rounded-md">
            {empData &&
              empData.map((data, index) => {
                const Icon = data.icon;
                return (
                  <div key={index}>
                    <span className="text-3xl">
                      <Icon />
                    </span>
                    <span>{data.label}</span>
                    <span className="text-xs font-normal">{data.data}</span>
                  </div>
                );
              })}
          </div>
        </div>

        <EmployeePieChart />
        <UpcomingInterview />
      </div>
      <div className="">
        <ClientBarChart />
      </div>
    </div>
  );
};

export default Dashboard;
