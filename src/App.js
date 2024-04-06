import React from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/components/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
const App = () => {
  return (
    <>
    <Navigation/>
    {/* <div><HomePage/></div> */}
   <Product/>
    <div><Footer/></div>
    </>
  )
}

export default App