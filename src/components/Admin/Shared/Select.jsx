import React from "react";

const Select = ({ label, options }) => {
  return (
    <div className="relative basis-[calc(50%-0.5rem)]">
      <select
        required
        defaultValue=""
        className="
      peer w-full h-14
      appearance-none bg-white
      border border-gray-300 rounded-md
      px-3 pt-2 pb-1
      text-sm text-[gray-900]
      focus:outline-none focus:border-[#1CB5E0] focus:ring-1 focus:ring-[#1CB5E0]
      transition-all duration-300
    "
      >
        <option value="" disabled hidden></option>
        {options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>

      <label
        className="
      absolute left-3 top-5 text-gray-500 text-sm bg-white px-1
      transition-all duration-300
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#1CB5E0]
      peer-valid:-top-2 peer-valid:text-xs peer-valid:text-gray-900
    "
      >
        {label}*
      </label>

      <div className="pointer-events-none absolute right-3 top-5 text-gray-500 select-none">
        ▼
      </div>
    </div>
  );
};

export default Select;
