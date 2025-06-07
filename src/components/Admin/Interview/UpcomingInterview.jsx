import React from "react";
import { UpcomingInterviewData } from "../Data/Interview";
import { LuAlarmClock } from "react-icons/lu";
import Heading2 from "../Shared/heading2";

const UpcomingInterview = () => {
  return (
    <div className=" border-black/15 border px-3 py-4">
      <Heading2 heading={"Upcoming Interviews"} />
      <div className=" flex flex-col items-center gap-y-4 py-4">
        {UpcomingInterviewData &&
          UpcomingInterviewData.map((interview) => {
            return (
              <div
                key={interview.id}
                className="flex items-center gap-x-4  w-full text-sm"
              >
                <div className="size-10 overflow-hidden rounded-full">
                  <img
                    src={interview.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span>{interview.name}</span>
                  <span className="text-xs text-black/50">
                    {interview.position}
                  </span>
                </div>
                <div className="flex items-center ml-auto text-xs gap-x-2">
                  <LuAlarmClock />
                  <span>{interview.time}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UpcomingInterview;
