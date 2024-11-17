"use client";
import React, { useState, ReactNode } from "react";
import UserContext from "./UserContext";

interface UserContextValue {
  isCollapsed: boolean;
  handleToggleSidebar: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const contextValue: UserContextValue = {
    isCollapsed,
    handleToggleSidebar,
    isDarkMode,
    toggleTheme,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;