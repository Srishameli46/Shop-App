import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
import { products } from "../util/ProductDetails";
import { Button } from "../Components/Button";

export function Product() {
  // const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-5 py-10 mt-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Our Milkshake Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-5 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-fit rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-blue-700 mb-6">Rs: {product.price}</p>
            <div className="flex gap-4">
              <Button onClick={() => addToCart(product)}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-green-300 mb-4" childern="Add to Cart">
              </Button>
              <Link to={`/products/${product.id}`}>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-4 focus:ring-blue-300" childern="View Product"></Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
