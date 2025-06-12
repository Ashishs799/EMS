import Man1 from "../../../assets/person_img/man1.png";
import Man2 from "../../../assets/person_img/man2.png";
import Man3 from "../../../assets/person_img/man3.png";
import Man4 from "../../../assets/person_img/man4.png";
import Woman1 from "../../../assets/person_img/woman.png";
import Woman2 from "../../../assets/person_img/woman2.png";
import Woman3 from "../../../assets/person_img/woman3.png";
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
const day = String(today.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate); // e.g., "2025-06-04"

export const InterviewTableColumns = [
  { key: "interviewee_name", label: "Name" },
  { key: "job_position", label: "Position" },
  { key: "job_department", label: "Department" },
  { key: "interview_phn", label: "Phone" },
  { key: "interviewee_email", label: "Email" },
  { key: "interview_date", label: "Date" },
  { key: "interview_time", label: "Time" },
  { key: "interview_type", label: "Type" },
];

export const interviewValues = [
  {
    name: "Yashna Karki",
    position: "Content Strategist",
    department: "Marketing",
    date: formattedDate,
    time: "10:00 AM - 10:30 AM",
  },
  {
    id: 2,
    name: "Samar Kc",
    position: "UI/UX",
    department: "Designing",
    date: formattedDate,
    time: "12:00 PM - 12:30 PM",
  },
  {
    id: 3,
    name: "Anurag Wosti",
    position: "SEO Specialist",
    department: "SEO",
    date: formattedDate,
    time: "2:00 PM - 2:30 PM",
  },
  {
    id: 4,
    name: "Mrunal Thakur",
    position: "Frontend Developer",
    department: "Development",
    date: formattedDate,
    time: "3:30 PM - 4:00 PM",
  },
];
export const UpcomingInterviewData = [
  {
    id: 1,
    name: "Yashna Karki",
    position: "Content Strategist",
    image: Woman1,
    date: formattedDate,
    time: "10:00 AM - 10:30 AM",
  },
  {
    id: 2,
    name: "Samar Kc",
    position: "UI/UX",
    image: Man1,
    date: formattedDate,
    time: "12:00 PM - 12:30 PM",
  },
  {
    id: 3,
    name: "Anurag Wosti",
    position: "SEO Specialist",
    image: Man2,
    date: formattedDate,
    time: "2:00 PM - 2:30 PM",
  },
  {
    id: 4,
    name: "Mrunal Thakur",
    position: "Frontend Developer",
    image: Woman2,
    date: formattedDate,
    time: "3:30 PM - 4:00 PM",
  },
];
