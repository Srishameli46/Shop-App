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
  quantity?:number|0
}

export function Cart() {
  const { cart ,addToCart,updateCartItemQuantity} = useCart();
  const totalAmount = cart.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0);
  const navigate = useNavigate();


  return (
    <>

      <div className="container mx-auto px-4 py-8 mt-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
          <Button onClick={() => navigate(-1)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" children="Checkout"></Button>
        </div>

        {cart.map((product: Product) => (
          <div className="mt-8">
          <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0">
              <img src={product.image} alt="Product image" className="w-32 h-32 object-cover" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="mt-2 text-gray-600">Product Description</p>
              <div className="mt-4 flex items-center">
                <span className="mr-2 text-gray-600">Quantity:</span>
                <div className="flex items-center">
                  <button className="bg-gray-200 rounded-l-lg px-2 py-1" onClick={()=>updateCartItemQuantity(product.id,product.quantity||0)}>-</button>
                  <span className="mx-2 text-gray-600">{product.quantity}</span>
                  <button className="bg-gray-200 rounded-r-lg px-2 py-1" onClick={()=>addToCart(product)}>+</button>
                </div>
                <span className="ml-auto font-bold">Rs:{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
        
        <div className="flex justify-end items-center mt-8">
          <span className="text-gray-600 mr-4">Subtotal:</span>
          <span className="text-xl font-bold">Rs : {totalAmount}</span>
        </div>
      </div>
    </>
  );
}
