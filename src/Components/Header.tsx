import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.jpg"
import { useContext } from "react";
import AuthContext from "../context/Authcontext";

const authentication = useContext(AuthContext)

const {logout} = authentication;

export function Header() {
  return (
    <>
      <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 dark:bg-gray-800 shadow fixed top-0 left-0 w-full z-50 h-14">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-14"></img>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white italic">
              THE AMERICAN SHAKES
            </span>
          </a>
          <div className="w-full md:block md:w-auto hidden" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              <li>
                <NavLink
                  to="/home"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{ color: "#fafafa" }}
                    size="xl" 
                    onClick={logout}
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
