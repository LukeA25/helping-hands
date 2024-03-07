import { createContext, useState } from "react";

export const UserContext = createContext<any>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ signedIn, setSignedIn }}>
      {children}
    </UserContext.Provider>
  );
};
