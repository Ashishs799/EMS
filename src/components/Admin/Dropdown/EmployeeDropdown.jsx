import React from "react";

const EmployeeDropdown = ({ content, setContent }) => {
  return (
    <div className="flex flex-col text-sm ml-8  [&>*]:py-1 [&>*]:flex [&>*]:transition [&>*]:delay-75 [&>*]:duration-100 [&>*]:ease-in [&>*]:cursor-pointer">
      <button
        onClick={() => setContent("allemployees")}
        className={content === "allemployees" ? "active_red" : ""}
      >
        All Employee
      </button>
      <button
        onClick={() => setContent("addemployee")}
        className={content === "addemployee" ? "active_red" : ""}
      >
        Add Employee
      </button>
    </div>
  );
};

export default EmployeeDropdown;
