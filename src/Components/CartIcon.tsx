import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export function CartIcon({cartItemCount}:{cartItemCount:number}){
  return(<>
        <div className="fixed bottom-4 right-4">
        <Link to="/cart" className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="text-4xl text-black-700 rounded-full border-bg-black"/>
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
  </>)
}