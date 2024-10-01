import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Layout } from '../Layouts/Layout';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Product } from '../Pages/Product';
import { Cart } from '../Pages/Cart';
import { CartProvider } from '../context/CartContext';
import { ProductDetail } from '../Pages/ProductDetail';


function Router() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route index element={<Navigate to={'/login'} />} />
            <Route path='/' element={<Layout />}>
              <Route path='home' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='products' element={<Product />} />
              <Route path='products/:productId' element={<ProductDetail />} />
              <Route path='cart' element={<Cart />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      < Outlet />
    </>
  )
}

export default Router