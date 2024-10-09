import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../util/constants";
import { AuthContext } from "../context/Authcontext";

export function PrivateRouter() {
  const authentication = useContext(AuthContext);

  const { loginState } = authentication;

  return loginState.isAutheticated ? <Outlet /> : <Navigate to={`${LOGIN}`}></Navigate>;
}
