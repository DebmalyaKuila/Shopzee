import React, { useState } from 'react'
import {Button, message} from "antd"
import { addToCart } from '../APIs/addToCart'
const AddToCartButton = ({item}) => {
  const [loading,setLoading]=useState(false)
  const addProductToCart=()=>{
    setLoading(true)
addToCart(item.id).then(res=>{
  message.success(`${item.title} has been added to cart`);
  setLoading(false)
}).catch(error =>{
  message.error("Something wrong happened,cannot add to cart")
  setLoading(false)
})
  }
  return (
    <>
      <Button type="link" loading={loading} onClick={()=>addProductToCart()}>Add to Cart</Button>
    </>
  )
}

export default AddToCartButton
