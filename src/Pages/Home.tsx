import { Link,Outlet } from "react-router-dom"
import img from "../assets/images/imag.jpg"
export function Home(){
  return (
    <>    <div className="container-fluid m-5">
      <div className="flex">
        <div className="flex-column items-center justify-content-center pl-5 relative top-5 leading-10">
         <img src={img} className="w-80" alt="Home" />
          <Link to='/product'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View Products</button>
          </Link>
        </div>
      </div>
    </div>
      <Outlet />
    </>


  )
}