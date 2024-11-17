"use client";
import LoginForm from "./LoginForm";
import SideLeft from "./SideLeft";
import toast from "react-hot-toast";
import { useUserContext } from "@/app/hooks/useUserContext";

const Login = () => {
  const { isDarkMode } = useUserContext();
  const handleToastWarning = () => {
    toast.error("This demo project only supports Google Authentication for learning purposes.");
  };
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center w-full min-h-screen gap-6 md:gap-20 transition duration-300 ${
        isDarkMode ? "bg-dark-background" : "bg-light-background"
      } p-4`}
    >
      <SideLeft />
      <LoginForm handleToastWarning={handleToastWarning} />
    </div>
  );
};

export default Login;
