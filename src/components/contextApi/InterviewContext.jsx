import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const InterviewContext = createContext();

const InterviewContextProvider = ({ children }) => {
  const [interview, setInterview] = useState({
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
  const [interviewList, setInterviewList] = useState(() => {
    return JSON.parse(localStorage.getItem("interviews")) || [];
  });
  const [showInterviewCard, setShowInterviewCard] = useState(false);

  const showInterviewModal = () => {
    setShowInterviewCard(true);
  };
  const hideInterviewModal = () => {
    setShowInterviewCard(false);
  };

  const handleInterviewChange = (e) => {
    const { name, value } = e.target;
    setInterview((prevInterview) => ({ ...prevInterview, [name]: value }));
  };

  const addInterview = (e) => {
    e.preventDefault();
    const updatedList = [...interviewList, interview];
    localStorage.setItem("interviews", JSON.stringify(updatedList));
    setInterviewList(updatedList);
    setInterview({
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
    alert("Interview set !!");
  };

  const data = {
    interviewList,
    handleInterviewChange,
    addInterview,
    showInterviewCard,
    showInterviewModal,
    hideInterviewModal,
  };
  return (
    <InterviewContext.Provider value={data}>
      {children}
    </InterviewContext.Provider>
  );
};
export default InterviewContextProvider;

export const useInterviewContext = () => useContext(InterviewContext);
