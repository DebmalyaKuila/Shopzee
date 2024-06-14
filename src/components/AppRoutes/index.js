import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Cart from "../../pages/Cart"
import AdminPanel from '../../pages/AdminPanel'

const AppRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/:categoryId" element={<Category/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin" element={<AdminPanel/>} />
    </Routes>
  )
}

export default AppRoutes
