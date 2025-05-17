import { useState, createContext, useContext } from "react";

export const AdminContext = createContext();
const AdminContextProvider = ({ children }) => {
  const [preview, setPreview] = useState(null);
  const gender = ["Male", "Female"];
  const departments = [
    "Development",
    "Designing",
    "Testing",
    "HR",
    "SEO",
    "Management",
  ];
  const designations = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "QA Tester",
    "Test Engineer",
    "HR Executive",
    "Recruiter",
    "SEO Specialist",
    "Content Strategist",
    "Project Manager",
    "Product Manager",
    "Team Lead",
    "Business Analyst",
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const data = {
    preview,
    gender,
    departments,
    designations,
    handleImageChange,
  };
  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
};
export default AdminContextProvider;

// custom hook
export const useAdminContext = () => useContext(AdminContext);
