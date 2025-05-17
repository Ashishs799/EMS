import React from "react";

const Input = ({ type, ID, label }) => {
  return (
    <div className="relative basis-[calc(50%-0.5rem)]">
      <input
        type={type}
        id={ID}
        required
        placeholder=" "
        className="
    peer h-14 w-full border border-gray-300 rounded outline-0
    px-2 pt-2 pb-1 text-sm
    focus:border-[#1CB5E0] focus:ring-1 focus:ring-[#1CB5E0]
    transition-all duration-300
  "
      />
      <label
        htmlFor={ID}
        className="
    absolute left-2 top-2.5 text-gray-500 text-sm px-1
    transition-all duration-300
    peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
    peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#1CB5E0] peer-focus:bg-white
    peer-valid:-top-2 peer-valid:text-xs peer-valid:text-gray-900 peer-valid:bg-white
  "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
