import React, {
  createContext,
  ReactNode,
  useContext,
  useReducer
} from "react";
import { products } from "../data/ProductDetails";
import { cartReducer } from "../reducer/cartReducer";
import { Action, CartState } from "../types/appTypes";

const initialState: CartState = {
  product: products,
  cart: [],
};

interface CartConextDate {
  state: CartState;
  dispatch: React.Dispatch<Action>
}

const CartContextData: CartConextDate = {
  state: initialState,
  dispatch: ()=> null
};

const CartContext = createContext(CartContextData);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
