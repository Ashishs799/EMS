import React from "react";

const Cards = ({ title, number, icon }) => {
  return (
    <div className="w-full py-4 px-8 bg-teal-500 rounded-sm">
      <div className="flex flex-col gap-y-2 justify-center w-full h-full">
        <span className="text-xl">{title}</span>
        <h2 className="text-4xl w-full flex justify-between items-center">
          {number} {icon}
        </h2>
        <span className="text-xs">in the last 30 days</span>
      </div>
    </div>
  );
};

export default Cards;
