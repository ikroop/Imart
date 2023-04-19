import React from 'react'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ProtectedRoutes from '../custom-hooks/ProtectedRoutes'
const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<ProtectedRoutes><Checkout/></ProtectedRoutes>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/shop/:id' element={<ProductDetails/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}


export default Router
