import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Bill } from "../Components/Bill";
import { Button } from "../Components/Button";
import { CartItem } from "../Components/CartItem";
import { PRODUCT } from "../util/constants";

export function Cart() {
  const { state } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-teal-50">
        <div className="container mx-auto px-4 py-8 mt-5 ">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-2xl font-bold my-4">Orders</h1>
            <Button
              onClick={() => navigate(`/${PRODUCT}`)}
              className="bg-sky-500 hover:bg-sky-700 py-2"
              children="Go to Product"
            />
          </div>

          {state.cart.length === 0 ? (
            <p className="text-gray-600 text-center text-3xl">
              Your cart is empty.
            </p>
          ) : (
            <CartItem cart={state.cart}></CartItem>
          )}
          {state.cart.length > 0 && <Bill cart={state.cart}></Bill>}
        </div>
      </div>
    </>
  );
}
