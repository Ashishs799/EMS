import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AdminContextProvider from "./components/contextApi/ContextApi.jsx";
import AnnouncementContextProvider from "./components/contextApi/announcementApi.jsx";
import InterviewContextProvider from "./components/contextApi/InterviewContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContextProvider>
      <AnnouncementContextProvider>
        <InterviewContextProvider>
          <App />
        </InterviewContextProvider>
      </AnnouncementContextProvider>
    </AdminContextProvider>
  </StrictMode>
);
