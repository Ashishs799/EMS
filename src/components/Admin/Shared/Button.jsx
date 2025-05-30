import React from "react";

const Button = ({ label, type }) => {
  return (
    <div className=" relative rounded-sm bg-[#1CB5E0] overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1CB5E0] to-[#000851] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
      <button type={type} className="relative z-10 text-white w-32  px-8 py-2 ">
        {label}
      </button>
    </div>
  );
};

export default Button;
