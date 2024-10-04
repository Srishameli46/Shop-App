import { faL } from "@fortawesome/free-solid-svg-icons";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

const AuthContextData = {
  isAutheticated: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(AuthContextData);

export const Authprovider = ({ children }: { children: ReactNode }) => {
  const [isAutheticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAutheticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 export default AuthContext;
