import { Link } from "react-router-dom";
import { Button } from "../Components/Button";
import { useCart } from "../context/CartContext";
import { CartIcon } from "../Components/CartIcon";

export function Product() {
  const { addToCart, cart, product } = useCart();
  const cartItemCount = cart.length;

  return (
    <div className="container mx-auto px-5 py-10 mt-6">
      <h1 className="text-4xl font-bold text-center text-sky-500 mb-10">Our Milkshake Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {product.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-5 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-fit rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-cyan-500 mb-2">{product.name}</h2>
            <p className="text-xl font-semibold text-sky-950 mb-6">Rs: {product.price}</p>
            <div className="flex gap-4">
              <Button onClick={() => addToCart(product)}
                className="bg-sky-400 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-sky-300 mb-4" children="Add to Cart">
              </Button>
              <Link to={`/products/${product.id}`}>
                <Button className="bg-cyan-800 hover:bg-cyan-900 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-blue-300" children="View Product"></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <CartIcon cartItemCount={cartItemCount}></CartIcon>
    </div>
  );
}
