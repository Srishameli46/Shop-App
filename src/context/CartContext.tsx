import { createContext, ReactNode, useContext, useState } from "react";
import { products } from "../data/ProductDetails";
import { Product } from "../types/product";

const CartContextData = {
  cart: [
    { id: 0, name: "", description: "", price: 0, image: "", quantity: 0 },
  ],
  addToCart: (product: Product) => {},
  product: [
    { id: 0, name: "", description: "", price: 0, image: "", quantity: 0 },
  ],
  updateCartItemQuantity: (id: number, quantity: number) => {},
};

const CartContext = createContext(CartContextData);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product[]>(products);

  const addToCart = (product: Product) => {
    console.log("add");

    let existingCartItem = cart.find((item) => item.id === product.id);
    if (existingCartItem) {
    console.log(existingCartItem)
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);  
    }
  };
  console.log("------product",product);
  
  console.log("-------------cart",cart)

  const updateCartItemQuantity = (id: number, quantity: number) => {
    console.log("update");

    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: quantity - 1 } : item
        )
        .filter((item) => item.id !== id || quantity > 1)
    );

  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, product, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
