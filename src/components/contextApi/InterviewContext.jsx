import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const InterviewContext = createContext();

const InterviewContextProvider = ({ children }) => {
  const [interviews, setInterviews] = useState({
    inteviewId: uuidv4(),
    interviewee_name: "",
    job_position: "",
    job_department: "",
    interview_phn: "",
    interviewee_email: "",
    interview_date: "",
    interview_time: "",
    interview_type: "",
  });

  const handleInterviewChange = (e) => {
    const { name, value } = e.target;
    setInterviews((prevInterview) => ({ ...prevInterview, [name]: value }));
  };

  const addInterview = (e) => {
    e.preventDefault();
    const existingInterviews =
      JSON.parse(localStorage.getItem("interviews")) || [];
    const updatedInterview = [...existingInterviews, interviews];
    localStorage.setItem("interviews", JSON.stringify(updatedInterview));
    setInterviews(updatedInterview);
    alert("Interview set !!");
    console.log("Interviews, ", interviews);
  };

  const data = {
    interviews,
    handleInterviewChange,
    addInterview,
  };
  return (
    <InterviewContext.Provider value={data}>
      {children}
    </InterviewContext.Provider>
  );
};
export default InterviewContextProvider;

export const useInterviewContext = () => useContext(InterviewContext);
