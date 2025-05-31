import React from "react";

const CustomTable = ({ tableColumns, tableValues }) => {
  return (
    <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
      <table class="w-full text-left table-auto min-w-max text-slate-800">
        <thead>
          <tr class="text-slate-500 border-b border-slate-300 bg-slate-50">
            {tableColumns &&
              tableColumns.map((column) => {
                return (
                  <th className="p-4" key={column.key}>
                    <p className="text-sm leading-none font-normal">
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
              {tableColumns.map((col) => (
                <td key={col.key} className="p-4 text-sm font-bold">
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
