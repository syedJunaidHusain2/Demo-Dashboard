"use client";
import { GoSidebarCollapse } from "react-icons/go";
import { useUserContext } from "@/app/hooks/useUserContext";
import { sideBarData } from "@/app/constant";
import Image from "next/image";

const Sidebar = () => {
  const { handleToggleSidebar, isCollapsed, isDarkMode } = useUserContext();

  return (
    <div
      className={` absolute md:sticky md:top-0 md:left-0 flex flex-col justify-between h-screen md:py-5 py-4 transition-all duration-300 text-slate-400 
        ${isCollapsed ? "w-36 -left-96" : "md:w-72 w-full left-0 top-0"} 
        ${isDarkMode ? "bg-dark-darker" : "bg-light-lighter"}
      `}
    >
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-9">
          <div className="flex items-center space-x-2">
          <Image src="/Subtract.png" alt="Logo" width={44} height={44} className="ml-5" />
          {!isCollapsed && (
              <span
                className={`text-2xl pl-2  ${
                  isDarkMode ? "text-slate-400 " : "text-black"
                }`}
              >
                Base
              </span>
            )}
          </div>
          <button onClick={handleToggleSidebar}>
            <GoSidebarCollapse size={23} className="mr-7" />
          </button>
        </div>

        {/* Sidebar Items */}
        <div>
          {sideBarData.map((item, id) => (
            <div
              key={id}
              className={`flex items-center space-x-5 p-2 py-3 my-3 rounded-md cursor-pointer
        hover:bg-gradient-to-r hover:from-[rgba(172,169,255,0.16)] hover:to-[rgba(172,169,255,0.10)] 
        ${
          id === 1 &&
          "bg-gradient-to-r from-[rgba(172,169,255,0.16)] to-[rgba(172,169,255,0.10)]"
        }`}
            >
              <item.icon size={23} className="ml-5" />
              {!isCollapsed && <div className="font-medium">{item.name}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
