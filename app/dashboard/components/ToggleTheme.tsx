"use client";
import { useUserContext } from "@/app/hooks/useUserContext";

const ToggleTheme = () => {
  const {toggleTheme} = useUserContext();
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        className="sr-only peer"
        value=""
        type="checkbox"
        onClick={toggleTheme}
      />
      <div className="cursor-pointer w-12 h-6 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-5 before:w-5 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-md shadow-gray-400 peer-checked:shadow-md peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[2px] after:right-1 after:translate-y-full after:w-5 after:h-5 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
    </label>
  );
};

export default ToggleTheme;