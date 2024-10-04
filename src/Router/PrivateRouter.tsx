import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/Authcontext";


export function PrivateRouter(){
    const authentication = useContext(AuthContext);

    const {isAutheticated} = authentication;

    return (
      isAutheticated? <Outlet/>:<Navigate to="/login"></Navigate>

    )
}