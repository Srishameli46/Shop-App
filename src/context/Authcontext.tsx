import { createContext, useReducer, useState } from "react";
import { ReactNode } from "react";
import { Action } from "../types/appTypes";
import { Type } from "../enum/enum";

interface initialLoginStateProp {
  isAutheticated: boolean;
}

const initialLoginState = {
  isAutheticated: false,
};

interface AuthContextType {
  loginState: initialLoginStateProp;
  loginDispatch: React.Dispatch<Action>;
}

const AuthContextData: AuthContextType = {
  loginState: initialLoginState,
  loginDispatch: () => null,
};

const loginReducer = (
  state: initialLoginStateProp,
  action: Action
): initialLoginStateProp => {
  switch (action.type) {
    case Type.LOGIN: {
      return {
        isAutheticated: true,
      };
    }

    case Type.LOGOUT: {
      return {
        isAutheticated: false,
      };
    }

    default:
      return state;
  }
};

export const AuthContext = createContext(AuthContextData);

export const Authprovider = ({ children }: { children: ReactNode }) => {
  // const [isAutheticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initialLoginState
  );

  // const login = () => setIsAuthenticated(true);
  // const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ loginState, loginDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
