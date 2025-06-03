import React, { useContext, useState } from "react";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import { useAdminContext } from "../../contextApi/ContextApi";
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";

const AddEmployee = () => {
  const {
    preview,
    gender,
    departments,
    designations,
    handleInputChange,
    handleImageChange,
    newEmployee,
    handleSubmit,
  } = useAdminContext();

  return (
    <div className="w-full h-full ">
      <Heading heading={"Add Employee"} />
      <form
        action=""
        className="flex items-center gap-x-4 gap-y-8 flex-wrap"
        onSubmit={handleSubmit}
      >
        <Input
          ID={"fullname"}
          name="name"
          value={newEmployee.name}
          label={"Fullname"}
          type={"text"}
          handleInputChange={handleInputChange}
        />
        <Input
          ID={"email"}
          name="email"
          value={newEmployee.email}
          label={"Email"}
          type={"text"}
          handleInputChange={handleInputChange}
        />
        <Input
          ID={"mobile"}
          name="mobile"
          value={newEmployee.mobile}
          label={"Mobile"}
          type={"text"}
          handleInputChange={handleInputChange}
        />
        <Input
          ID={"address"}
          name="address"
          value={newEmployee.address}
          label={"Address"}
          type={"text"}
          handleInputChange={handleInputChange}
        />
        <Input
          ID={"jd"}
          name="jd"
          value={newEmployee.jd}
          label={"Joining Date"}
          type={"date"}
          handleInputChange={handleInputChange}
        />
        <Select
          label={"Gender"}
          options={gender}
          name="gender"
          value={newEmployee.gender}
          handleInputChange={handleInputChange}
        />
        <Select
          name="designation"
          value={newEmployee.designation}
          label={"Designations"}
          options={designations}
          handleInputChange={handleInputChange}
        />
        <Select
          name="department"
          value={newEmployee.department}
          label={"Departments"}
          options={departments}
          handleInputChange={handleInputChange}
        />
        <Input
          name="password"
          value={newEmployee.password}
          ID={"password"}
          label={"Password"}
          type={"text"}
          handleInputChange={handleInputChange}
        />
        <Input
          name="repassword"
          value={newEmployee.repassword}
          ID={"repass"}
          label={"Re-Enter Password"}
          type={"text"}
          handleInputChange={handleInputChange}
        />
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
        <Button label={"Submit"} type={"submit"} />
      </form>
    </div>
  );
};

export default AddEmployee;
