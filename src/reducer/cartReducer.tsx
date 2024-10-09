import { Type } from "../enum/enum";
import { Action, CartState } from "../types/appTypes";

export const cartReducer = (state: CartState,action: Action): CartState => {
  switch (action.type) {
    case Type.ADD_TO_CART: {
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart
          .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      } else {
        return {
          ...state, 
          cart: [...state.cart,{ ...action.payload, quantity: 1}],
        }
      }
    }

    case "UPDATE_CART": {
      return {...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity - 1 }
            : item
        )
        .filter(
          (item) => item.id !== action.payload.id || action.payload.quantity > 1
        )
      }
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        cart: []}
    }

    default: {
      return state;
    }
  }
};
