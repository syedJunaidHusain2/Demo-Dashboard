import { createContext } from "react";

export interface UserContextValue {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isCollapsed: boolean;
  handleToggleSidebar: () => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);
export default UserContext;