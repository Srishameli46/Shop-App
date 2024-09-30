import React from "react";
import { useCart } from "../util/CartContext"; // Importing the cart context
import { useNavigate } from "react-router-dom";
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string
}
export function Cart() {
  const { cart, removeFromCart } = useCart();
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);
  const navigate = useNavigate();


  return (
    <>
      <div className="flex">
        <button onClick={() => navigate(-1)} type="button" className="w-24 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-5 mt-16">Go Back</button>
        <div className="container mx-auto px-5 py-10 mt-5">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Your Cart</h1>
          {cart.length === 0 ? (
            <p className="text-lg text-gray-700 text-center">Your cart is empty!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {cart.map((item: Product) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg p-5 text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-2xl font-bold text-blue-600 mb-2">{item.name}</h2>
                  <p className="text-xl font-semibold text-blue-700 mb-6">{item.price}</p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-red-300">
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-blue-700">Total Amount: Rs {totalAmount}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
