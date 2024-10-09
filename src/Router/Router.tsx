import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from "../Pages/Login";
import { Layout } from "../Layouts/Layout";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Product } from "../Pages/Product";
import { Cart } from "../Pages/Cart";
import { CartProvider } from "../context/CartContext";
import { ProductDetail } from "../Pages/ProductDetail";
import { Authprovider } from "../context/Authcontext";
import { PrivateRouter } from "./PrivateRouter";
import { Order } from "../Pages/Order";
import { ABOUT, CART, HOME, LOGIN, PAYMENT, PRODUCT, PRODUCTID } from "../util/constants";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Authprovider>
          <CartProvider>
            <Routes>
              <Route path={LOGIN} element={<Login />} />
              <Route index element={<Navigate to={LOGIN} />} />
              <Route element={<PrivateRouter />}>
                <Route path="/" element={<Layout />}>
                  <Route path={HOME} element={<Home />} />
                  <Route path={ABOUT}element={<About />} />
                  <Route path={PRODUCT} element={<Product />} />
                  <Route
                    path={PRODUCTID}
                    element={<ProductDetail />}
                  />
                  <Route path={CART} element={<Cart />} />
                  <Route path={`${CART}/${PAYMENT}`} element={<Order />} />
                </Route>
              </Route>
            </Routes>
          </CartProvider>
        </Authprovider>
      </BrowserRouter>
      <Outlet />
    </>
  );
}

export default Router;
