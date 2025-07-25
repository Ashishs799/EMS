import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminContextProvider from "./components/contextApi/ContextApi.jsx";
import AnnouncementContextProvider from "./components/contextApi/announcementApi.jsx";
import InterviewContextProvider from "./components/contextApi/InterviewContext.jsx";
import LoginUserContextProvider from "./components/contextApi/Loginuser.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContextProvider>
      <AnnouncementContextProvider>
        <InterviewContextProvider>
          <App />
          <ToastContainer />
        </InterviewContextProvider>
      </AnnouncementContextProvider>
    </AdminContextProvider>
  </StrictMode>
);
