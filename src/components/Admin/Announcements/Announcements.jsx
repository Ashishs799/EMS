import React, { useContext, useEffect, useState } from "react";
import Button from "../Shared/Button";
import { useAnnouncementContext } from "../../contextApi/announcementApi";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import Heading from "../Shared/Heading";

const announcement = () => {
  const {
    announcement,
    announcements,
    handleAnnouncement,
    handleAnnouncementChange,
  } = useAnnouncementContext();
  useEffect(() => {
    console.log("Announcments hruuuu", announcement);
  }, [announcement]);
  const categories = ["Holiday", "Events", "Meetings"];
  return (
    <div className=" rounded-2xl">
      <Heading heading={"Announcement"} />
      <form action="" onSubmit={handleAnnouncement}>
        <div className="w-54 mb-4">
          <select
            name="category"
            id="category"
            value={announcement.category}
            onChange={handleAnnouncementChange}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 px-4"
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            {categories.map((cat, index) => (
              <option value={cat} key={index}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <Input
          label={"Subject"}
          type={"text"}
          name={"subject"}
          value={announcement.subject}
          handleInputChange={handleAnnouncementChange}
        />
        <textarea
          name="announcement"
          value={announcement.announcement}
          onChange={handleAnnouncementChange}
          id=""
          placeholder="Write an announcement..."
          className="w-full h-32 p-4 rounded-2xl border my-4"
        ></textarea>
        <Button type={"submit"} label={"Announce"} />
      </form>
      <div className=" my-8 w-full">
        <span className="font-bold py-4 block">History</span>
        <div className="w-full flex flex-wrap gap-4">
          {announcements &&
            announcements.map((data) => {
              return (
                <div
                  className="w-[49%] rounded-2xl border border-2-black p-4 flex flex-col items-center relative"
                  key={data.id}
                >
                  <span className=" font-bold">{data.subject}</span>
                  <p className="py-2">{data.announcement}</p>
                  <div className="text-end w-full px-4  absolute  bottom-0">
                    <span className="text-xs italic">
                      posted on {data.date}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default announcement;
