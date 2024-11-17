"use client";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import { useContext, useEffect, ReactNode } from "react";
import AuthContext from "../context/AuthContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/"); 
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;