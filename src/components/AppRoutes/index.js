import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Cart from "../../pages/Cart"
import AdminPanel from '../../pages/Admin.page/AdminPanel'

import Dashboard from '../../pages/Admin.page/Dashboard'
import Orders from '../../pages/Admin.page/Orders'
import Inventory from '../../pages/Admin.page/Inventory'
import Customers from '../../pages/Admin.page/Customers'

const AppRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/:categoryId" element={<Category/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin" element={<AdminPanel children={<Dashboard/>}/>}/>
            <Route path="/admin/inventory" element={<AdminPanel children={<Inventory/>} />}/>
            <Route path="/admin/orders" element={<AdminPanel children={<Orders/>} />}/>
            <Route path="/admin/customers" element={<AdminPanel children={<Customers/>}/>}/>
    </Routes>
  )
}

export default AppRoutes
