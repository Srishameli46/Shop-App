import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Layout } from '../Layouts/Layout';
import { Home } from '../Pages/Home';


function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route index element={<Navigate to={'/login'} />} />
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      < Outlet />
    </>
  )
}

export default Router