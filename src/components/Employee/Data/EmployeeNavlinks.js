import { MdDashboard } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";

export const EmployeeNavlinks = [
  {
    icon: MdDashboard,
    label: "Dashboard",
    content_: "dashboard",
  },
  {
    icon: RiTeamLine,
    label: "MY Team",
    content_: "myteam",
  },
  {
    icon: MdEditSquare,
    label: "Attendence",
    content_: "myattendence",
  },
  {
    icon: PiCoffeeFill,
    label: "Request Leave",
    content_: "leavereq",
  },
  {
    icon: FaTasks,
    label: "My tasks",
    content_: "mytasks",
  },
];
