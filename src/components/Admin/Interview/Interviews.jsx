import React, { useState } from "react";
import { InterviewTableColumns, interviewValues } from "../Data/Interview";
import Heading from "../Shared/Heading";
import CustomTable from "../Shared/Table";
import SetInterview from "./SetInterview";
import { useInterviewContext } from "../../contextApi/InterviewContext";
const Interviews = () => {
  const {
    interviewList,
    showInterviewCard,
    showInterviewModal,
    hideInterviewModal,
  } = useInterviewContext();
  console.log("Interview ho hai ", interviewList);

  return (
    <div className="w-full h-full relative">
      <Heading heading={"Interviews"} />
      <CustomTable
        tableColumns={InterviewTableColumns}
        tableValues={interviewList}
        show={showInterviewModal}
      />
      {showInterviewCard ? (
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SetInterview hide={hideInterviewModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Interviews;
