import { useState } from "react";
import Layout from "./components/Admin/Layout/Layout";
import Dashboard from "./components/Employee/Dashboard/EmpDashboard";
import Container from "./components/Login_Signup/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUserContextProvider, { LoginUserContext } from "./components/contextApi/Loginuser";
export default function App() {
  return (
    <div className="bg-slate-50">
      {/* <Layout /> */}
      <BrowserRouter>
      <LoginUserContextProvider>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/admin/dashboard" element={<Layout />} />
          <Route path="/employee/dashboard" element={<Layout />} />
        </Routes>
        </LoginUserContextProvider>
      </BrowserRouter>
    </div>
  );
}
