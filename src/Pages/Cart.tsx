import React from "react";
import { useCart } from "../util/CartContext"; // Importing the cart context
import { useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number | 0;
}

export function Cart() {
  const { cart, addToCart, updateCartItemQuantity } = useCart();
  const tax = 10.89;
  const totalAmount = cart.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0);
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">Orders</h1>
          {cart.length > 0 && (
            <Button
              onClick={() => navigate(-1)}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              children="Checkout"
            />
          )}
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center text-3xl">Your cart is empty.</p>
        ) : (
          cart.map((product: Product) => (
            <div key={product.id} className="mt-8">
              <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
                <div className="flex-shrink-0">
                  <img
                    src={product.image}
                    alt="Product image"
                    className="w-32 h-32 object-cover"
                  />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <div className="mt-4 flex items-center">
                    <span className="mr-2 text-gray-600">Quantity:</span>
                    <div className="flex items-center">
                      <Button
                        className="bg-gray-200 rounded-l-lg px-2 py-1"
                        children="-"
                        onClick={() =>
                          updateCartItemQuantity(product.id, product.quantity || 0)
                        }
                      />
                      <span className="mx-2 text-gray-600">{product.quantity}</span>
                      <Button
                        className="bg-gray-200 rounded-l-lg px-2 py-1"
                        children="+"
                        onClick={() => addToCart(product)}
                      />
                    </div>
                    <span className="mx-3 font-bold">Rs:{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
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
                  <span>Rs.{tax}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">Rs.{totalAmount + tax}</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Payment</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
