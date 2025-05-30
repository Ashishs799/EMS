import React, { useContext, useEffect, useState } from "react";
import Button from "../Shared/Button";
import { useAnnouncementContext } from "../../contextApi/announcementApi";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import Heading from "../Shared/Heading";

const Announcements = () => {
  const { announcements, handleAnnouncement, handleAnnouncementChange } =
    useAnnouncementContext();
  useEffect(() => {
    console.log("Announcments hruuuu", announcements);
  }, [announcements]);
  const categories = ["Holiday", "Events", "Meetings"];
  return (
    <div className=" rounded-2xl">
      <Heading heading={"Announcement"} />
      <form action="" onSubmit={handleAnnouncement}>
        <div className="w-54 mb-4">
          <select
            name="category"
            id="category"
            value={announcements.category}
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
          value={announcements.subject}
          handleInputChange={handleAnnouncementChange}
        />
        <textarea
          name="announcement"
          value={announcements.announcement}
          onChange={handleAnnouncementChange}
          id=""
          placeholder="Write an announcement..."
          className="w-full h-32 p-4 rounded-2xl border my-4"
        ></textarea>
        <Button type={"submit"} label={"Announce"} />
      </form>
    </div>
  );
};

export default Announcements;
