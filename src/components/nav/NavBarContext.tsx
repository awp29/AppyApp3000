import { createContext, ReactNode, useContext, useState } from "react";

interface NavbarContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <NavbarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook to use the navbar context
export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
