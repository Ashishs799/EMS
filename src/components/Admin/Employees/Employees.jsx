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


    </div>
  );
};

export default Employees;
