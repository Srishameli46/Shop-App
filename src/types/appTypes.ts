import { Type } from "../enum/enum";

export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; 
  quantity: number
}

export interface CartState {
  cart:ProductType[];
  product:ProductType[];
}

export interface Action {
  type:Type,
  payload?: any
}