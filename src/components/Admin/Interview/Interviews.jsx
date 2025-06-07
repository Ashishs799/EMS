import React, { useState } from "react";
import { InterviewTableColumns, interviewValues } from "../Data/Interview";
import Heading from "../Shared/Heading";
import CustomTable from "../Shared/Table";
import SetInterview from "./SetInterview";
const Interviews = () => {
  const [showInterviewCard, setShowInterviewCard] = useState(false);

  const showInterviewModal = () => {
    setShowInterviewCard(true);
  };
  const hideInterviewModal = () => {
    setShowInterviewCard(false);
  };
  return (
    <div className="w-full h-full relative">
      <Heading heading={"Interviews"} />
      <CustomTable
        tableColumns={InterviewTableColumns}
        tableValues={interviewValues}
         show={showInterviewModal}
      />
      {showInterviewCard ? (
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SetInterview hide={hideInterviewModal}/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Interviews;
