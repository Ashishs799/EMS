import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../../Content/Content";

const Layout = () => {
  const [content, setContent] = useState("")
  return (
    <div className="w-full h-screen flex justify-between ">
      <Sidebar content={content} setContent={setContent}/>
      <Content content={content} setContent={setContent}/>
    </div>
  );
};

export default Layout;
