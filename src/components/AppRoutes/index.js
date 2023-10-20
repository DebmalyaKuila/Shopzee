import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Cart from "../../pages/Cart"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/:categoryId" element={<Category/>} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>
  )
}

export default AppRoutes
