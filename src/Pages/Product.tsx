import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
import { useCart } from "../context/CartContext";
import { CartCount } from "../Components/CartICount";
import { useMemo } from "react";
import { CART, PRODUCT } from "../util/constants";
import { ProductType } from "../types/appTypes";
import { Type } from "../enum/enum";

export function Product() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const cartItemCount = useMemo(() => {
    return state.cart.length;
  }, [state.cart]);

  const addToCart = (product:ProductType) =>{
    dispatch({type:Type.ADD_TO_CART, payload:product})
  }

  return (
    <div className="bg-teal-50">
      <div className="container mx-auto px-5 py-10 mt-6">
        <h1 className="text-4xl font-bold text-center text-cyan-500 mb-10">
          Our Milkshake Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {state.product.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-5 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-fit rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-cyan-500 mb-2">
                {product.name}
              </h2>
              <p className="text-xl font-semibold text-sky-950 mb-6">
                Rs. {product.price}
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => {
                    addToCart(product), navigate(`/${CART}`);
                  }}
                  className="bg-sky-400 hover:bg-sky-600 py-2 mb-4"
                  children="Add to Cart"
                ></Button>
                <Link to={`/${PRODUCT}/${product.id}`}>
                  <Button
                    className="bg-cyan-800 hover:bg-cyan-900 py-2"
                    children="View Product"
                  ></Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <CartCount cartItemCount={cartItemCount}></CartCount>
      </div>
    </div>
  );
}
