"use client";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CustomModal from "./Modal";
import { useUserContext } from "@/app/hooks/useUserContext";
import AuthContext from "@/app/context/AuthContext";
import Image from "next/image";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleToggleSidebar, isDarkMode } = useUserContext();
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    setIsModalOpen(false);
    await logout();
    toast.success("Logged Out Successfully!");
    router.push("/");
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-20 w- flex justify-between items-center py-4 px-4 md:px-10 transition-all duration-300
        ${isDarkMode ? "bg-dark-darker" : "bg-light-background"}`}
      >
        <div className="md:hidden flex justify-between items-center">
          <GiHamburgerMenu
            size={25}
            className={`mr-3 cursor-pointer ${
              isDarkMode ? "text-slate-400 " : "text-gray-600 md:text-gray-800"
            }`}
            onClick={handleToggleSidebar}
          />
          <Image
            src="/Subtract.png"
            alt="Logo"
            width={44}
            height={44}
            className="w-8 h-8 md:w-11 md:h-11"
          />
          <div className="ml-3 text-lg font-semibold">Base</div>
        </div>
        <div
          className={`hidden md:block text-xl font-semibold flex-1 ${
            isDarkMode ? "text-slate-400 " : "text-black"
          }`}
        >
          Upload CSV
        </div>
        <div className="flex items-center space-x-4">
          <IoNotificationsSharp
            size={20}
            className={`
              ${
                isDarkMode
                  ? "text-slate-400 "
                  : "text-gray-600 md:text-gray-800"
              }`}
          />
          <CgProfile
            size={20}
            className={`
              ${
                isDarkMode
                  ? "text-slate-400 "
                  : "text-gray-600 md:text-gray-800"
              }`}
          />
          <div className="relative group" onClick={() => setIsModalOpen(true)}>
            <RiLogoutCircleLine
              size={20}
              className={`cursor-pointer ${
                isDarkMode
                  ? "text-slate-400 "
                  : "text-gray-600 md:text-gray-800"
              }`}
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-gray-800 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Logout
            </span>
          </div>
        </div>
      </nav>

      {/* CustomModal for logout confirmation */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
        message="Are you sure you want to logout?"
      />
    </>
  );
};

export default Navbar;
