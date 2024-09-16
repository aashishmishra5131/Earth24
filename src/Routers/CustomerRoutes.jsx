import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../customer/components/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/Footer'
import Navigation from '../customer/components/Navigation/Navigation'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import LoginForm from '../Auth/LoginForm'

const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        <Routes>
           <Route path='/login' element={<HomePage/>}></Route>
           <Route path='/register' element={<HomePage/>}></Route>
           <Route path='/' element={<HomePage/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
           <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
           <Route path='/:product/:productId' element={<ProductDetails/>}></Route> 
           <Route path='/chechout' element={<Checkout/>}></Route> 
           <Route path='/account/order' element={<Order/>}></Route> 
           <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route> 
           {/* <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route> */}
        </Routes>
        <div><Footer/></div>
    </div>
    
  )
}

export default CustomerRoutes