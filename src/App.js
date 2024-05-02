import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CustomerRoutes from './Routers/CustomerRoutes'
const App = () => {
  return (
    <>
    <Routes>
          <Route path='/*' element={<CustomerRoutes/>}></Route>
    </Routes>

   
    </>
  )
}

export default App