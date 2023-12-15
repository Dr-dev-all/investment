"use client";
import { createContext, useState } from "react";

export const AuthProvider = createContext();

export default function Authproviders({ children }) {
  const [auth, setAuth] = useState({});
  return (
    <AuthProvider.Provider value={{ auth, setAuth }}>
      {children}
    </AuthProvider.Provider>
  );
}
