import React from "react";
import Cards from "../../Admin/Shared/Cards";
import { MdOutlineTaskAlt } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import WorkingHourChart from "../Chart/WorkingHourChart";
import ProjectChart from "../Chart/ProjectChart";
import Activity from "../Activity/Activity";

const EmpDashboard = () => {
  const userRole = localStorage.getItem("UserLogin");
  return (
    <div className="w-full h-full flex flex-col gap-y-8 ">
      <div className="w-full flex gap-x-4 justify-between items-center ">
        <Cards title={"Team Members"} number={5} icon={<RiTeamLine />} />
        <Cards title={"Task Assigned"} number={8} icon={<FaTasks />} />
        <Cards
          title={"Task Completed"}
          number={4}
          icon={<MdOutlineTaskAlt />}
        />
        <Cards title={"Leaves"} number={7} icon={<PiCoffeeFill />} />
      </div>
      <div className="w-full flex items-center gap-x-8">
        <WorkingHourChart />
        <div>
          <ProjectChart />
        </div>
      </div>
      <div className="w-full flex items-center gap-x-8">
        <div className="w-full">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            harum deleniti blanditiis fuga temporibus ut ratione, vero
            reiciendis vel nisi iste?
          </span>
        </div>
        <div>
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default EmpDashboard;
