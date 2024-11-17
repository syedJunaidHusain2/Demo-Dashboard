"use client";
import { createContext } from "react";

interface AuthContextType {
  user: any | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: async () => {}
});

export default AuthContext;