import { createContext, ReactNode, useContext, useState } from "react";
import { products } from "../data/ProductDetails"
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string
  quantity?: number | 0
}

interface Cart extends Product {
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  product: Product[];
  updateCartItemQuantity: (id: number, quantity: number) => void
  removeItem: (id: number, quantity: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [product] = useState<Product[]>(products);

  const addToCart = (product: Product) => {
    const existingCartItem = cart.find(item => item.id === product.id);
    if (existingCartItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItemQuantity = (id: number, quantity: number) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: quantity - 1 } : item
    )
      .filter((item) => item.id !== id || quantity > 1));
  };

  const removeItem = (id: number) => {
    setCart(((prevCart) => prevCart.filter((item) => item.id !== id)));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, product, updateCartItemQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

