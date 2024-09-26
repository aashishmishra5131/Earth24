import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Admin from '../Admin/Admin';

const AdminRouters = () => {
  return (
    <Routes>
        <Route path="/*" element={<Admin/>}></Route>
    </Routes>
  )
}

export default AdminRouters