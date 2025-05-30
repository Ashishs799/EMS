import React from "react";
import Heading from "../Shared/Heading";

const Attendence = () => {
  return (
    <div className="w-full h-full">
      <Heading heading={"Attendence"}/>
      <table>
        <thead>
          <th>
            <td>Name</td>
            <td>Employee ID</td>
            <td>Attendence</td>
          </th>
        </thead>
      </table>
    </div>
  );
};

export default Attendence;
