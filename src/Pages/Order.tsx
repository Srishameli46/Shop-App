import "../assets/scss/font.scss";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button";
import { HOME, PRODUCT } from "../util/constants";

export function Order() {
  return (
    <>
      <div className="bg-teal-50 flex items-center justify-center h-screen ">
        <div className="bg-gray-100 w-96 mt-16 border">
          <div className="bg-white p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Your order is conformed!
              </h3>
              <p className="text-gray-600 my-4">
                Your order placed successfully. Thank you for completing your
                order.
              </p>
              <p> Have a great day! </p>
              <div className="border-b mt-10"></div>
              <div className="my-7 text-center flex gap-6">
                <Link to={`/${PRODUCT}`}>
                  <Button
                    className="px-7 bg-white border text-black hover:bg-indigo-500 hover:text-white font-semibold rounded-r-lg"
                    children="Go to product"
                    varient="Secondary"
                  ></Button>
                </Link>
                <Link to={`/${HOME}`}>
                  <Button
                    className="px-7 bg-white border text-black hover:bg-indigo-500 hover:text-white font-semibold rounded-r-lg"
                    children="Make Payment"
                    varient="Secondary"
                  ></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
