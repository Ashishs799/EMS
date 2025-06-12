import React from "react";
import Dashboard from "../Admin/Dashboard/Dashboard";
import Employees from "../Admin/Employees/Employees";
import Attendence from "../Admin/Attendence/Attendence";
import Assign_tasks from "../Admin/Tasks/Assign_tasks";
import Announcements from "../Admin/Announcements/Announcements";
import Leave_Requests from "../Admin/Leave Requests/Leave_Requests";
import AddEmployee from "../Admin/Employees/AddEmployee";
import Interviews from "../Admin/Interview/Interviews";

const Content = ({ content, setContent }) => {
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
  return (
    <div className="w-full h-full pr-8 py-4 ">
      <div className=" h-full rounded-2xl ">{showContent()}</div>
    </div>
  );
};

export default Content;
