import { MdSpaceDashboard } from "react-icons/md";
import { FaUpload } from "react-icons/fa6";
import { TbFileInvoice } from "react-icons/tb";
import { MdCancelScheduleSend } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

export const sideBarData = [
  {
    name: "Dashboard",
    icon: MdSpaceDashboard,
  },
  {
    name: "Upload",
    icon: FaUpload,
  },
  {
    name: "Invoice",
    icon: TbFileInvoice,
  },
  {
    name: "Schedule",
    icon: MdCancelScheduleSend,
  },
  {
    name: "Calendar",
    icon: FaCalendarDay,
  },  {
    name: "Notification",
    icon: IoIosNotifications,
  },  {
    name: "Settings",
    icon: IoSettings,
  },
];
