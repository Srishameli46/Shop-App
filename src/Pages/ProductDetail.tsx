import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "../Components/Button";
import { CartCount } from "../Components/CartICount";
import { CART, PRODUCT } from "../util/constants";
import { ProductType } from "../types/appTypes";
import { Type } from "../enum/enum";

export function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const cartItemCount = state.cart.length;
  const item = state.product.find(
    (productDetail) => String(productDetail.id) === productId
  );
  if (!item) {
    throw new Error("Item may be empty");
  }

  const addToCart = (product:ProductType) =>{
    dispatch({type:Type.ADD_TO_CART, payload:product})
  }

  return (
    <>
      <div className="bg-teal-50 h-auto">
        <div className="mt-14 flex gap-96">
          <Button
            onClick={() => navigate(`/${PRODUCT}`)}
            type="button"
            className="bg-sky-500 hover:bg-sky-700 py-2 h-10 ms-2 mt-5"
          >
            Back
          </Button>
          <div className="flex flex-col items-center">
            <div className="w-80">
              <div className="bg-white rounded-lg shadow-lg p-5 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-fit rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold text-cyan-500 mb-2">
                  {item.name}
                </h2>
                <p className="text-lg">{item.description}</p>
                <p className="text-xl font-semibold text-sky-950 my-6">
                  Rs. {item.price}
                </p>
                <Button
                  onClick={() => {
                    addToCart(item), navigate(`/${CART}`);
                  }}
                  className="bg-cyan-400 hover:bg-cyan-600 py-2 mb-4"
                  children="Add to Cart"
                ></Button>
              </div>
            </div>
          </div>
          <CartCount cartItemCount={cartItemCount}></CartCount>
        </div>
      </div>
    </>
  );
}
