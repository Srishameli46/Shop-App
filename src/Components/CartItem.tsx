import { useCart } from "../context/CartContext";
import { Type } from "../enum/enum";
import { ProductType } from "../types/appTypes";
import { Button } from "./Button";

interface Props {
  cart: ProductType[];
}
export function CartItem({ cart }: Props) {
  const { dispatch } = useCart();

  const addToCart = (product:ProductType) =>{
    dispatch({type:Type.ADD_TO_CART, payload:product})
  }

  const updateCartItemQuantity = (id:number, quantity:number) =>{
    dispatch({type:Type.UPDATE_CART, payload:{id, quantity}})
  }

  return (
    <>
      {cart.map((product) => (
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
                    className="px-2"
                    children="-"
                    onClick={() =>
                      updateCartItemQuantity(product.id, product.quantity)
                    }
                    varient="Secondary"
                  />
                  <span className="mx-2 text-gray-600">{product.quantity}</span>
                  <Button
                    className="px-2"
                    children="+"
                    onClick={() => addToCart(product)}
                    varient="Secondary"
                  />
                </div>
                <span className="mx-3 font-bold">
                  Rs.{product.price * product.quantity}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
