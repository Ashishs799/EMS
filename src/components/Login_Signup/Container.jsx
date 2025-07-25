import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useLoginUserContext } from "../contextApi/Loginuser";

const Container = () => {
  const { setUser, userHandle } = useLoginUserContext();
  return (
    <div className="h-screen w-full bg-teal-300 flex justify-center items-center">
      <div className="w-[400px] h-[400px] bg-amber-50 flex flex-col items-center justify-center gap-y-4">
        <div className=" flex justify-between items-center gap-x-2">
          <div className="px-4 py-2 rounded-4xl bg-red-600">
            <button
              onClick={() => {
                setUser("Admin");
                localStorage.setItem("UserLogin", "Admin");
              }}
            >
              Admin
            </button>
          </div>
          <div className="px-4 py-2 rounded-4xl bg-teal-800">
            <button
              onClick={() => {
                setUser("Employee");
                localStorage.setItem("UserLogin", "Employee");
              }}
            >
              Employee
            </button>
          </div>
        </div>
        <div className="px-4 py-2 rounded-4xl bg-purple-600">
          <button onClick={userHandle}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Container;
