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
      {/* <AddEmployee /> */}
      {/* <table clae="w-full">
        <thead className="bg-red-400">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Role</th>
            <th scope="col">Department</th>
            <th scope="col">Phone</th>
            <th scope="col">Joining Date</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {empData &&
            empData.map((data) => {
              return (
                <tr key={data.id} className="text-sm">
                  <td scope="">{data.name}</td>
                  <td>{data.designation}</td>
                  <td>{data.department}</td>
                  <td>{data.mobile}</td>
                  <td>{data.dob}</td>
                  <td>{data.email}</td>
                  <td>{data.gender}</td>
                  <td> {data.address}</td>
                </tr>
              );
            })}
        </tbody>
      </table> */}
      <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
        <table class="w-full text-left table-auto min-w-max text-slate-800">
          <thead>
            <tr class="text-slate-500 border-b border-slate-300 bg-slate-50">
              <th class="p-4">
                <p class="text-sm leading-none font-normal"> Name</p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">Designation</p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">Department</p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">Phone</p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">Date of Birth</p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">Email</p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">Gender</p>
              </th>
              <th class="p-4">
                <p class="text-sm leading-none font-normal">Address</p>
              </th>
              <th class="p-4">
                <p></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {empData &&
              empData.map((data) => {
                return (
                  <tr class="hover:bg-slate-50" key={data.id}>
                    <td class="p-4">
                      <p class="text-sm font-bold">{data.name}</p>
                    </td>
                    <td class="p-4">
                      <p class="text-sm">{data.designation}</p>
                    </td>
                    <td class="p-4">
                      <p class="text-sm">{data.department}</p>
                    </td>
                    <td class="p-4">
                      <p class="text-sm">{data.mobile}</p>
                    </td>
                    <td class="p-4">
                      <p class="text-sm">{data.dob}</p>
                    </td>
                    <td class="p-4">
                      <p class="text-sm">{data.email}</p>
                    </td>
                    <td class="p-4">
                      <p class="text-sm">{data.gender}</p>
                    </td>
                    <td class="p-4">
                      <p class="text-sm">{data.address}</p>
                    </td>
                    <td class="p-4">
                      <a href="#" class="text-sm font-semibold ">
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
