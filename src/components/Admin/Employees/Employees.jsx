import React, { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import Heading from "../Shared/Heading";
import { useAdminContext } from "../../contextApi/ContextApi";
import { VscChecklist } from "react-icons/vsc";
import { VscStarHalf } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";
import Button from "../Shared/Button";

const Employees = () => {
  const { empData } = useAdminContext();
  useEffect(() => console.log("Employees areee", empData.length), [empData]);

  return (
    <div className="w-full h-full ">
      <Heading heading={" Employees"} />

      <div className="w-full flex justify-between items-center flex-wrap gap-y-6 ">
        {empData.map((emp) => {
          const randomNumber = Math.floor(Math.random() * 11);
          const formattedNumber = randomNumber.toString().padStart(2, "0");
          return (
            <div
              className="w-[49%] h-[250px] flex border border-[#1cb5e027] bg-white"
              key={emp.name}
            >
              <div className="w-60 py-4 my-1 border-r border-r-[#1cb5e027] flex flex-col items-center justify-center gap-y-5">
                <div className="h-32 w-32 overflow-hidden rounded-full">
                  <img
                    src={emp.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w- w-full py-2 flex justify-between px-8 text-2xl [&>*]:flex [&>*]:flex-col [&>*]:items-center ">
                  <span>
                    <VscChecklist />
                    <span className="text-[16px]">{formattedNumber}</span>
                  </span>{" "}
                  <span>
                    <VscStarHalf /> <span className="text-[16px]">04</span>
                  </span>
                  <span>
                    <MdOutlinePendingActions />
                    <span className="text-[16px]">{formattedNumber}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between  w-2/3 px-4 py-4 ">
                <div className="flex flex-col w-fit gap-y-1">
                  <span className="font-semibold text-xl">{emp.name}</span>
                  <span className="w-fit  text-xs px-4 py-1 text-white bg-[#1cb5e0a4] rounded-md">
                    {emp.designation}
                  </span>
                </div>
                <p className="my-4 border-t border-t-[#1cb5e027] py-2 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima animi nam quasi nesciunt? Laudantium, architecto
                  reprehenderit.
                </p>
                <div className="w-fit px-8 py-2 bg-[#1CB5E0] text-white text-xs rounded-full">
                  <button className="">Assign Task</button>
                </div>
                {/* <Button type={"button"} label={"Assign task"} /> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto  text-slate-800">
          <thead>
            <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
              <th className="p-4">
                <p className="text-sm leading-none font-normal"> Name</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Designation</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Department</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Phone</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">
                  Date of Birth
                </p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Email</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Gender</p>
              </th>
              <th className="p-4">
                <p className="text-sm leading-none font-normal">Address</p>
              </th>
              <th className="p-4">
                <p></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {empData &&
              empData.map((data) => {
                return (
                  <tr className="hover:bg-slate-50" key={data.id}>
                    <td className="p-4">
                      <p className="text-sm font-bold">{data.name}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data.designation}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data.department}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data.mobile}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data.dob}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data.email}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data.gender}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm">{data.address}</p>
                    </td>
                    <td className="p-4">
                      <a href="#" className="text-sm font-semibold ">
                        Edit
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Employees;
