import React from "react";
import Button from "./Button";
import Search from "./Search";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

const CustomTable = ({ tableColumns, tableValues, show }) => {
  return (
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
      <div className="bg-[#1cb5e022] py-2 pr-4 flex items-center justify-between">
        <Search />
        <IoIosAddCircle
          className="text-[#1CB5E0] text-xl cursor-pointer"
          onClick={show}
        />
      </div>
      <table className="w-full text-left table-auto min-w-max text-slate-800">
        <thead>
          <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
            {tableColumns &&
              tableColumns.map((column) => {
                return (
                  <th className="p-4" key={column.key}>
                    <p className="text-sm leading-none font-bold">
                      {" "}
                      {column.label}
                    </p>
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {tableValues.map((row, index) => (
            <tr key={index} className="hover:bg-slate-50">
              {tableColumns.map((col, colIndex) => (
                <td
                  key={col.key}
                  className={`p-4 text-sm ${
                    colIndex === 0 ? "font-bold" : "font-normal"
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
