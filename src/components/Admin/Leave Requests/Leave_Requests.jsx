import React from "react";
import Heading from "../Shared/Heading";
import CustomTable from "../Shared/Table";
import { LeaveData, leaveValues } from "../Data/LeaveData";

const Leave_Requests = () => {
  return (
    <div className="w-full h-full">
      <Heading heading={"Leave Requests"} />
      <CustomTable tableColumns={LeaveData} tableValues={leaveValues} />
    </div>
  );
};

export default Leave_Requests;
