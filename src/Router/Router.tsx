import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Layout } from '../Layouts/Layout';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Product } from '../Pages/Page';


function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route index element={<Navigate to={'/login'} />} />
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home/>} />
            <Route path='about' element={<About/>}/>
            <Route path='products' element={<Product/>} />
            <Route path='cart' element={<Cart/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
      < Outlet />
    </>
  )
}

export default Router