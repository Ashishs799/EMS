import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const AnnouncementContext = createContext();

const AnnouncementContextProvider = ({ children }) => {
  const [announcement, setAnnouncement] = useState({
    id: uuidv4(),
    announcement: "",
    category: "",
    subject: "",
    date: new Date().toDateString(),
    createdBy: "Ashish Lohani",
    role: "HR Manager",
  });

  const [announcements, setAnnouncements] = useState(() => {
    const stored = localStorage.getItem("announcements");
    return stored ? JSON.parse(stored) : [];
  });

  const handleAnnouncementChange = (e) => {
    const { name, value } = e.target;
    setAnnouncement((prevAnnouncement) => ({
      ...prevAnnouncement,
      [name]: value,
    }));
  };
  const handleAnnouncement = (e) => {
    e.preventDefault();
    const newAnnouncement = { ...announcement };
    const updated = [...announcements, newAnnouncement];

    localStorage.setItem("announcements", JSON.stringify(updated));
    setAnnouncements(updated);

    alert("Announcements posted !!");

    // Optionally reset the form
    setAnnouncement({
      id: uuidv4(),
      announcement: "",
      category: "",
      subject: "",
      date: new Date().toDateString(),
      createdBy: "Ashish Lohani",
      role: "HR Manager",
    });
  };

  const value = {
    announcement,
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
