import React from "react";
import Input from "../Shared/Input";
import Heading2 from "../Shared/heading2";
import { RxCross2 } from "react-icons/rx";
import Button from "../Shared/Button";
import Select from "../Shared/Select";
import Cancel from "../Shared/Cancel";
import { useInterviewContext } from "../../contextApi/InterviewContext";

const SetInterview = ({ hide }) => {
  const InterviewType = ["HR Round", "Technical Round", "Final Round"];
  const { interviews, handleInterviewChange, addInterview } =
    useInterviewContext();
  console.log(interviews.time);
  return (
    <div className="w-[850px] px-4 py-4 bg-white border border-gray-300 relative rounded-sm">
      <div className="flex items-center justify-between">
        <Heading2 heading={"Set Interview"} />
        <RxCross2 className="cursor-pointer text-xl" onClick={hide} />
      </div>
      <form
        action=""
        className="py-4 px-2 flex items-center gap-4 flex-wrap"
        onSubmit={addInterview}
      >
        <div className="flex items-center gap-x-4 gap-y-4 flex-wrap  py-4 ">
          <Input
            ID={"interviewee"}
            name="interviewee_name"
            value={interviews.interviewee_name || ""}
            label={"Fullname"}
            type={"text"}
            handleInputChange={handleInterviewChange}
          />
          <Input
            ID={"job_position"}
            name="job_position"
            value={interviews.job_position || ""}
            label={"Job Position"}
            type={"text"}
            handleInputChange={handleInterviewChange}
          />
          <Input
            ID={"job_department"}
            name="job_department"
            value={interviews.job_department || ""}
            label={"Department"}
            type={"text"}
            handleInputChange={handleInterviewChange}
          />
          <Input
            ID={"interview_phn"}
            name="interview_phn"
            value={interviews.interview_phn || ""}
            label={"Phone"}
            type={"text"}
            handleInputChange={handleInterviewChange}
          />
          <Input
            ID={"interviewee_email"}
            name="interviewee_email"
            value={interviews.interviewee_email || ""}
            label={"Email"}
            type={"text"}
            handleInputChange={handleInterviewChange}
          />
          <Input
            ID={"interview_date"}
            name="interview_date"
            value={interviews.interview_date || ""}
            label={"Interview Date"}
            type={"date"}
            handleInputChange={handleInterviewChange}
          />
          <Input
            ID={"interview_time"}
            name="interview_time"
            value={interviews.interview_time || ""}
            label={"Time"}
            type={"text"}
            handleInputChange={handleInterviewChange}
          />
          <Select
            name="interview_type"
            value={interviews.interview_type || ""}
            label={"Interview Type"}
            options={InterviewType}
            handleInputChange={handleInterviewChange}
          />
        </div>
        <Button label={"Set"} type={"submit"} />
        <Cancel hide={hide} />
      </form>
    </div>
  );
};

export default SetInterview;
