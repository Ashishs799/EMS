import React, { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import Heading from "../Shared/Heading";

const Employees = () => {
  const [empData, setEmpData] = useState();
  useEffect(() => {
    const empInfo = localStorage.getItem("employees");
    setEmpData(JSON.parse(empInfo));
    console.log(empData);
  }, []);
  return (
    <div className="w-full h-full ">
      <Heading heading={"All Employees"} />

      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max text-slate-800">
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
      </div>
    </div>
  );
};

export default Employees;
