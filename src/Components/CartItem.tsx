import { useCart } from "../context/CartContext";
import { Product } from "../types/product";
import { Button } from "./Button";

export function CartItem() {
  const { cart, addToCart, updateCartItemQuantity } = useCart();


  return (
    <>
      {cart.map((product: Product) => (
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
                    className="bg-white rounded-l-lg px-2 py-1 shadow-md"
                    children="-"
                    onClick={() => {
                      updateCartItemQuantity(product.id, product.quantity || 0)
                    }
                    }
                  />
                  <span className="mx-2 text-gray-600">{product.quantity}</span>
                  <Button
                    className="bg-white rounded-l-lg px-2 py-1 shadow-md"
                    children="+"
                    onClick={() => addToCart(product)}
                  />
                </div>
                <span className="mx-3 font-bold">Rs:{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}