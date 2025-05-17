import React from "react";
import Dashboard from "../Admin/Dashboard/Dashboard";
import Employees from "../Admin/Employees/Employees";
import Attendence from "../Admin/Attendence/Attendence";
import Assign_tasks from "../Admin/Tasks/Assign_tasks";
import Announcements from "../Admin/Announcements/Announcements";
import Leave_Requests from "../Admin/Leave Requests/Leave_Requests";

const Content = ({ content, setContent }) => {
  console.log("Content is ", content);
  function showContent() {
    // if (content == "employees") {
    //   return <Employees />;
    // } else if (content == "attendence") {
    //   return <Attendence />;
    // } else if (content == "leaves") {
    //   return <Leave_Requests />;
    // } else if (content == "tasks") {
    //   return <Assign_tasks />;
    // } else if (content == "announcement") {
    //   return <Announcements />;
    // } else {
    //   return <Dashboard />;
    // }
    switch (content) {
      case "employees":
        return <Employees />;
      case "attendence":
        return <Attendence />;
      case "leaves":
        return <Leave_Requests />;
      case "tasks":
        return <Assign_tasks />;
      case "announcement":
        return <Announcements />;
      default:
        return <Dashboard />;
    }
  }
  return (
    <div className="w-full h-full  px-12 py-8">
      <div className=" h-full rounded-2xl">{showContent()}</div>
    </div>
  );
};

export default Content;
