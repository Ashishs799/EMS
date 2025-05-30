import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const AnnouncementContext = createContext();

const AnnouncementContextProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState({
    id: uuidv4(),
    announcement: "",
    category: "",
    subject: "",
    date: Date.now(),
    createdBy: "Ashish Lohani",
    role: "HR Manager",
  });
  const handleAnnouncementChange = (e) => {
    const { name, value } = e.target;
    setAnnouncements((prevAnnouncements) => ({
      ...prevAnnouncements,
      [name]: value,
    }));
  };
  const handleAnnouncement = (e) => {
    e.preventDefault();
    const newAnnouncement = { ...announcements };
    const existingAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];

    const updatedAnnouncements = [...existingAnnouncements, newAnnouncement];

    // Correctly store in localStorage
    localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));
    alert("Announcements posted !!");
    // Optionally reset the form after submission
    // setAnnouncements({
    //   id: uuidv4(),
    //   announcement: "",
    //   category: "",
    //   subject: "",
    //   date: Date.now(),
    //   createdBy: "Ashish Lohani",
    //   role: "HR Manager",
    // });

    console.log("Announcement is:", newAnnouncement);
  };

  const value = {
    announcements,
    handleAnnouncement,
    handleAnnouncementChange,
  };
  return (
    <AnnouncementContext.Provider value={value}>
      {children}
    </AnnouncementContext.Provider>
  );
};
export default AnnouncementContextProvider;

// custom hook
export const useAnnouncementContext = () => useContext(AnnouncementContext);
