import { useState, createContext, useContext } from "react";

import { v4 as uuidv4 } from "uuid";
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
  const [newEmployee, setNewEmployee] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    gender: "",
    designation: "",
    department: "",
    image: "",
    password: "",
    repassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);

      // Also store image file or URL in newEmployee state
      setNewEmployee((prevDetails) => ({
        ...prevDetails,
        image: imageUrl,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //checking if all the fields are filled
    if (
      !newEmployee.name ||
      !newEmployee.address ||
      !newEmployee.mobile ||
      !newEmployee.email ||
      !newEmployee.dob ||
      !newEmployee.gender ||
      !newEmployee.department ||
      !newEmployee.designation ||
      !newEmployee.password ||
      !newEmployee.repassword
    ) {
      alert("Please fill all the fields.");
      return;
    }
    //checking if passwords matched
    if (newEmployee.password !== newEmployee.repassword) {
      alert("Passwords do not match !!");
      return;
    }

    // get employees from local storage
    const existedEmployees =
      JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = [...existedEmployees, newEmployee];
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    1;
    console.log("Employee Details are ", newEmployee);
    // reset to default
    setNewEmployee({
      id: uuidv4(),
      name: "",
      email: "",
      mobile: "",
      address: "",
      dob: "",
      gender: "",
      designation: "",
      department: "",
      image: "",
      password: "",
      repassword: "",
    });
    setPreview(null);
  };

  const data = {
    preview,
    gender,
    departments,
    designations,
    newEmployee,
    handleInputChange,
    handleImageChange,
    handleSubmit,
  };
  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
};
export default AdminContextProvider;

// custom hook
export const useAdminContext = () => useContext(AdminContext);
