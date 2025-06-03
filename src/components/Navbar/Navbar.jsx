import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import pic from "../../assets/pp.jpg";
import { LuDot } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="  flex justify-between pr-8 mt-8 bg-white items-center">
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
      <div className="flex items-center gap-x-8 text-black/75">
        <span className="text-xl">
          <IoMoonOutline />
        </span>

        <span className="text-xl relative">
          <span className=" text-2xl text-red-700 rounded-full absolute -top-3 left-2">
            <LuDot />
          </span>
          <IoMdNotificationsOutline />
        </span>

        <div className="flex flex-row-reverse gap-x-2 bg-[#EBF2FA] rounded-full px-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={[pic]} alt="" className="size-full" />
          </div>
          <div className="flex flex-col justify-center items-center text-xs">
            <span>Ashish Lohani</span>
            <span>Admin/Hr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
