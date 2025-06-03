import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../../Content/Content";
import Navbar from "../../Navbar/Navbar";

const Layout = () => {
  const [content, setContent] = useState("");
  return (
    <div className="w-full h-screen flex justify-between ">
      <Sidebar content={content} setContent={setContent} />
      <div className="w-full">
        <Navbar />
        <Content content={content} setContent={setContent} />
      </div>
    </div>
  );
};

export default Layout;
