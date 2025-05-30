import React from "react";

const Heading = ({ heading }) => {
  return (
    <div>
      {" "}
      <h2 className="text-2xl font-bold text-[#1CB5E0] mb-4">{heading}</h2>
    </div>
  );
};

export default Heading;
