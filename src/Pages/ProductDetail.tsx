import { useNavigate, useParams,Link } from "react-router-dom"
import { useCart } from "../util/CartContext";
import { Button } from "../Components/Button";
import { CartIcon } from "../Components/CartIcon";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string
  quantity?: number | 0
}
export function ProductDetail() {

  const { productId } = useParams();
  const navigate = useNavigate();
  const { product, addToCart, cart } = useCart();
  const cartItemCount = cart.length;
  const item: Product = product.find(productDetail =>
    String(productDetail.id) === productId)

  return (<>
    <div className="mt-10 flex gap-96">
      <Button onClick={() => navigate(-1)} type="button" className="h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5">Back</Button>
      <div className="flex flex-col items-center">
        <div className="w-80">
          <div className="bg-white rounded-lg shadow-lg p-5 text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-fit rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-cyan-500 mb-2">{item.name}</h2>
            <p className="text-lg">{item.description}</p>
            <p className="text-xl font-semibold text-sky-950 my-6">Rs: {item.price}</p>
            <Button onClick={() => addToCart(item)}
              className="bg-green-400 hover:bg-green-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-green-300 mb-4" children="Add to Cart">
            </Button>
          </div>
        </div>
      </div>
      <CartIcon cartItemCount={cartItemCount}></CartIcon>

    </div>

  </>)
}