import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { PiCoffeeFill } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";

const SidebarLinks = [
  {
    icon: MdDashboard,
    label: "Dashboard",
    content_: "dashboard",
  },
  {
    icon: MdPeople,
    label: "Employees",
    content_: "employees",
  },
  {
    icon: MdEditSquare,
    label: "Attendence",
    content_: "attendence",
  },
  {
    icon: PiCoffeeFill,
    label: "Leave Requests",
    content_: "leaves",
  },
  {
    icon: FaTasks,
    label: "Assign Tasks",
    content_: "tasks",
  },
  {
    icon: MdAnnouncement,
    label: "Announcement",
    content_: "announcement",
  },
];

export default SidebarLinks;
