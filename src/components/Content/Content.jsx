import React from "react";
import Dashboard from "../Admin/Dashboard/Dashboard";
import Employees from "../Admin/Employees/Employees";
import Attendence from "../Admin/Attendence/Attendence";
import Assign_tasks from "../Admin/Tasks/Assign_tasks";
import Announcements from "../Admin/Announcements/Announcements";
import Leave_Requests from "../Admin/Leave Requests/Leave_Requests";
import AddEmployee from "../Admin/Employees/AddEmployee";
import Interviews from "../Admin/Interview/Interviews";
import { MyTeam } from "../Employee/MyTeam/MyTeam";
import MyAttendence from "../Employee/MyAttendence/MyAttendence";
import ReqLeave from "../Employee/Request_leave/ReqLeave";
import MyTasks from "../Employee/MyTasks/MyTasks";
import EmpDashboard from "../Employee/Dashboard/EmpDashboard";

const Content = ({ content, setContent }) => {
  const loggedInUser = localStorage.getItem("UserLogin");
  console.log("Content is ", content);
  function showContent() {
    switch (content) {
      case "allemployees":
        return <Employees />;
      case "addemployee":
        return <AddEmployee />;
      case "attendence":
        return <Attendence />;
      case "leaves":
        return <Leave_Requests />;
      case "interview":
        return <Interviews />;
      case "tasks":
        return <Assign_tasks />;
      case "announcement":
        return <Announcements />;
      default:
        return <Dashboard />;
    }
  }
  function showEmpContent() {
    switch (content) {
      case "myteam":
        return <MyTeam />;

      case "myattendence":
        return <MyAttendence />;
      case "leavereq":
        return <ReqLeave />;
      case "mytasks":
        return <MyTasks />;

      default:
        return <EmpDashboard />;
    }
  }
  return (
    <div className="w-full h-full pr-8 py-4 ">
      <div className=" h-full rounded-2xl ">
        {loggedInUser === "Admin" ? showContent() : showEmpContent()}
      </div>
    </div>
  );
};

export default Content;
