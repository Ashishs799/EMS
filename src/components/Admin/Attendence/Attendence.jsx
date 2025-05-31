import React from "react";
import Heading from "../Shared/Heading";
import { attendanceColumns, attendanceData } from "../Data/attendanceData";
import CustomTable from "../Shared/Table";

const Attendence = () => {
  return (
    <div className="w-full h-full">
      <Heading heading={"Attendence"} />
      <CustomTable
        tableColumns={attendanceColumns}
        tableValues={attendanceData}
      />
    </div>
  );
};

export default Attendence;
