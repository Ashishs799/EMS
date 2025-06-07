import React from "react";

const Cancel = ({ hide }) => {
  return (
    <div className="w-fit relative rounded-sm bg-[#1cb5e05a] overflow-hidden group cursor-pointer">
      <button
        type="text"
        className="relative z-10 text-white px-8 py-2 text-sm cursor-pointer"
        onClick={hide}
      >
        Cancel
      </button>
    </div>
  );
};

export default Cancel;
