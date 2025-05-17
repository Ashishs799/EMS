import React, { useState } from "react";
import pfp from "../../../assets/pp.jpg";
import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { MdEditSquare } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";
import { GiCoffeeCup } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";

const Sidebar = ({ content, setContent }) => {
  return (
    <div className="w-[400px] bg-white py-8 px-8">
      <div className="bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white h-full py-12 rounded-2xl px-4">
        <div className="flex flex-col items-center gap-y-1">
          <div className="img w-20 h-20 rounded-full overflow-hidden ">
            <img src={pfp} className="w-full h-full" alt="" />
          </div>
          <span>Ashish Lohani</span>
          <span className="text-xs">Admin</span>
        </div>
        <div className="py-4 flex flex-col gap-y-2 [&>*]:flex [&>*]:items-center [&>*]:gap-x-2 [&>*]:py-2 [&>*]:px-2 text-[16px] [&>*]:cursor-pointer [&>*]:rounded-sm [&>*]:hover:bg-[#1CB5E0] [&>*]:transition   [&>*]:delay-75 [&>*]:duration-200 [&>*]:ease-in">
          <div
            onClick={() => setContent("dashboard")}
            className={!content || content === "dashboard" ? "active" : ""}
          >
            <MdDashboard className="text-xl" />
            <span>Dashboard</span>
          </div>
          <div
            onClick={() => setContent("employees")}
            className={content == "employees" ? "active" : ""}
          >
            <MdPeople className="text-xl" />
            <span>Employees</span>
          </div>
          <div
            onClick={() => setContent("attendence")}
            className={content == "attendence" ? "active" : ""}
          >
            <MdEditSquare className="text-xl" />
            <span>Attendence</span>
          </div>
          <div
            onClick={() => setContent("leaves")}
            className={content == "leaves" ? "active" : ""}
          >
            <PiCoffeeFill className="text-xl" />
            <span>Leave Requests</span>
          </div>
          <div
            onClick={() => setContent("tasks")}
            className={content == "tasks" ? "active" : ""}
          >
            <FaTasks className="text-xl" />
            <span>Assign Tasks</span>
          </div>
          <div
            onClick={() => setContent("announcement")}
            className={content == "announcement" ? "active" : ""}
          >
            <MdAnnouncement className="text-xl" />
            <span>Announcement</span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Sidebar;
