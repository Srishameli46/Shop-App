import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { Button } from "../Components/Button";
import { CartItem } from "../Components/CartItem";
export function Cart() {
  const { cart } = useCart();

  const totalAmount = useMemo(() => {
    let total = 0;
    cart.map((item) => {
      total += item.price * (item.quantity || 0);
    });
    return total;
  }, [cart]);
  cart.reduce(
    (total, product) => total + product.price * (product.quantity || 0),
    0
  );
  const navigate = useNavigate();
  const calTax = (totalAmount: number) => {
    if (totalAmount === 0) {
      return 0;
    } else {
      return 10.89;
    }
  };

  return (
    <>
      <div className="bg-teal-50">
        <div className="container mx-auto px-4 py-8 mt-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-2xl font-bold my-4">Orders</h1>
            {cart.length > 0 && (
              <Button
                onClick={() => navigate(-1)}
                className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
                children="Go to Product"
              />
            )}
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-600 text-center text-3xl">
              Your cart is empty.
            </p>
          ) : (
            <CartItem></CartItem>
          )}
          {cart.length > 0 && (
            <div className="flex justify-center">
              <div className="md:w-1/4 mt-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold mb-4">Summary</h2>
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>Rs.{totalAmount}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes</span>
                    <span>Rs.{calTax(totalAmount)}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      Rs.{totalAmount + calTax(totalAmount)}
                    </span>
                  </div>
                  <Button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    children="Payment"
                  ></Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
