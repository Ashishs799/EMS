import React, { useContext, useState } from "react";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import { AdminContext, useAdminContext } from "../../contextApi/ContextApi";
import Button from "../Shared/Button";

const AddEmployee = () => {
  const { preview, gender, departments, designations, handleImageChange } =
    useAdminContext();
  return (
    <div className="w-full h-full">
      <form action="" className="flex items-center gap-x-4 gap-y-8 flex-wrap">
        <Input ID={"fullname"} label={"Fullname"} type={"text"} />
        <Input ID={"email"} label={"Email"} type={"text"} />
        <Input ID={"mobile"} label={"Mobile"} type={"text"} />
        <Input ID={"address"} label={"Address"} type={"text"} />
        <Input ID={"dob"} label={"Date of Birth"} type={"date"} />
        <Select label={"Gender"} options={gender} />
        <Select label={"Designations"} options={designations} />
        <Select label={"Departments"} options={departments} />
        <Input ID={"password"} label={"Password"} type={"text"} />
        <Input ID={"repass"} label={"Re-Enter Password"} type={"text"} />
        <div className="w-full">
          <label
            htmlFor="image-upload"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Upload Profile Picture
          </label>

          <div className=" h-32 relative border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:border-blue-500 transition">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-fit h-24 rounded-full"
              />
            ) : (
              <span className="text-gray-400 text-sm">
                Click to upload image
              </span>
            )}
          </div>
        </div>
        <Button label={"Submit"} />
      </form>
    </div>
  );
};

export default AddEmployee;
