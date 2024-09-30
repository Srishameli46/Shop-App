import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Components/Button";
import { useCart } from "../util/CartContext";

export function Product() {
  const { addToCart, cart, product } = useCart();
  const cartItemCount = cart.length;

  return (
    <div className="container mx-auto px-5 py-10 mt-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Our Milkshake Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {product.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-5 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-fit rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-cyan-500 mb-2">{product.name}</h2>
            <p className="text-xl font-semibold text-sky-950 mb-6">Rs: {product.price}</p>
            <div className="flex gap-4">
              <Button onClick={() => addToCart(product)}
                className="bg-green-400 hover:bg-green-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-green-300 mb-4" children="Add to Cart">
              </Button>
              <Link to={`/products/${product.id}`}>
                <Button className="bg-blue-500 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-blue-300" children="View Product"></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4">
        <Link to="/cart" className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-3xl text-black-700 rounded-full border-bg-black"/>
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
