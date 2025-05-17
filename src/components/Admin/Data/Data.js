import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";
const employeeStatus = [
  {
    icon: FaRegCalendarCheck,
    label: "Attendance",
    data: 30,
  },
  {
    icon: FaRegClock,
    label: "Late coming",
    data: 30,
  },
  {
    icon: FaUmbrellaBeach,
    label: "Absent",
    data: 30,
  },
  {
    icon: TbCancel,
    label: "Leave requests",
    data: 30,
  },
];
export default employeeStatus;
