import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CustomerRoutes from './Routers/CustomerRoutes'
import AdminRouters from './Routers/AdminRouters'


const App = () => {
  return (
    <>
    <Routes>
          <Route path='/*' element={<CustomerRoutes/>}></Route>
          <Route path='/admin/*' element={<AdminRouters/>}></Route>
    </Routes>

   
    </>
  )
}

export default App