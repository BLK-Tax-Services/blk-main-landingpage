"use client";

import React,
{
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from "react";

interface AccessContextType {
  isUnlocked: boolean;
  unlockSite: () => void;
}

const AccessContext = createContext<AccessContextType | undefined>(undefined);

export const AccessProvider = ({ children }: { children: ReactNode }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const hasAccess = sessionStorage.getItem("site_unlocked") === "true";
    if (hasAccess) {
      setIsUnlocked(true);
    }
  }, []);

  const unlockSite = () => {
    sessionStorage.setItem("site_unlocked", "true");
    setIsUnlocked(true);
  };

  return (
    <AccessContext.Provider value={{ isUnlocked, unlockSite }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => {
  const context = useContext(AccessContext);
  if (context === undefined) {
    throw new Error("useAccess must be used within an AccessProvider");
  }
  return context;
};