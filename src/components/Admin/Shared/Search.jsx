import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="h-fit flex items-center px-4 py-2 gap-x-4  outline-[#1cb5e027] text-sm  rounded-sm">
      <span className="text-black/75 text-[16px]">
        <IoSearchOutline />
      </span>
      <input
        type="text"
        placeholder="Search for results"
        className="outline-none "
      />
    </div>
  );
};

export default Search;
