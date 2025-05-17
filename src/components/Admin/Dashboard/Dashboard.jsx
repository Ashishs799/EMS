import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";
import EmployeeLineChart from "./EmployeeLineChart";
import EmployeePieChart from "./EmployeePieChart";
import employeeData from "../Data/Data";

const Dashboard = () => {
  const empData = employeeData;

  return (
    <div className="w-full h-full flex flex-col gap-y-8">
      <EmployeeLineChart />
      <div className=" flex w-full items-center gap-x-4 ">
        <div className="w-[420px] px-4 py-6 flex flex-col gap-y-8 justify-between rounded-md border border-black/15">
          <span className=" font-bold">Employees Status</span>

          <div className=" flex items-center justify-between gap-4 flex-wrap  [&>*]:border [&>*]:border-black/15 [&>*]:w-[180px] [&>*]:h-[120px] [&>*]:px-3 [&>*]:py-4 [&>*]:flex [&>*]:flex-col [&>*]:items-start [&>*]:justify-center [&>*]:gap-y-2 [&>*]:text-sm [&>*]:font-bold [&>*]:rounded-md">
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
            {/* <div>
              <span className="text-3xl">
                <FaRegCalendarCheck />
              </span>
              <span>Attendence</span>
              <span className="text-xs font-normal">30</span>
            </div>
            <div>
              <span className="text-3xl">
                <FaRegClock />
              </span>
              <span>Late coming</span>
              <span className="text-xs font-normal">33</span>
            </div>
            <div>
              <span className="text-3xl">
                <FaUmbrellaBeach />
              </span>
              <span>Absent</span>
              <span className="text-xs font-normal">2</span>
            </div>
            <div>
              <span className="text-3xl">
                <TbCancel />
              </span>
              <span>Leave requests</span>
              <span className="text-xs font-normal">8</span>
            </div> */}
          </div>
        </div>

        <EmployeePieChart />
      </div>
    </div>
  );
};

export default Dashboard;
