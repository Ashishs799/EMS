import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AdminContextProvider from "./components/contextApi/ContextApi.jsx";
import AnnouncementContextProvider from "./components/contextApi/announcementApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContextProvider>
      <AnnouncementContextProvider>
        <App />
      </AnnouncementContextProvider>
    </AdminContextProvider>
  </StrictMode>
);
