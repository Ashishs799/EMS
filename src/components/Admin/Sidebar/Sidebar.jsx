import React, { useState } from "react";
import pfp from "../../../assets/pp.jpg";
import SidebarLinks from "../Data/SidebarLinks";
import EmployeeDropdown from "../Dropdown/EmployeeDropdown";

const Sidebar = ({ content, setContent }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sideBarData = SidebarLinks;
  return (
    <div className="w-[400px] py-8 ">
      <div className="fixed w-[280px] pl-8">
        <div className="w-full bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white h-full py-12 rounded-2xl px-4">
          <div className="flex flex-col items-center gap-y-1">
            <div className="img w-20 h-20 rounded-full overflow-hidden ">
              <img src={pfp} className="w-full h-full" alt="" />
            </div>
            <span>Ashish Lohani</span>
            <span className="text-xs">Admin</span>
          </div>
          <div className="py-4 flex flex-col gap-y-2   ">
            {sideBarData &&
              sideBarData.map((link) => {
                const ICON = link.icon;
                const isEmployee = link.content_ === "employees";
                return (
                  <div
                    key={link.content_}
                    className="w-full  [&>*]:transition [&>*]:delay-75 [&>*]:duration-200 [&>*]:ease-in [&>*]:py-2 [&>*]:px-2 [&>*]:cursor-pointer"
                  >
                    <div
                      onClick={() => {
                        if (isEmployee) {
                          setDropdownOpen(!dropdownOpen);
                        } else {
                          setContent(link.content_);
                        }
                      }}
                      className={`${
                        (!isEmployee && content === link.content_) ||
                        (isEmployee && dropdownOpen)
                          ? "active "
                          : "hover:bg-[#1CB5E0]"
                      }`}
                    >
                      <div className="flex items-center gap-x-3">
                        <ICON className="text-xl" />
                        <span>{link.label}</span>
                      </div>
                    </div>
                    {isEmployee && dropdownOpen && (
                      <EmployeeDropdown
                        content={content}
                        setContent={setContent}
                      />
                    )}
                  </div>
                );
              })}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
