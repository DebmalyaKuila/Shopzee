import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);

// when you add items to your product list ,it will become frustrating to add mannual default cart item to your object ,That,s why a function is made to set the default cartItem number
function getDefaultCart() {
  let cart = {};
  for (let itemId = PRODUCTS[0].id; itemId <= PRODUCTS.length; itemId++) {
    cart[itemId] = 0;
  }
  return cart;
}

 const  ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart=(itemId)=>{
          setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
  }
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
}
  const changeHandler=(itemId,NewValue)=>{
setCartItems((prev)=>({...prev,[itemId]:NewValue}))
  }

  // PRODUCTS is an array of objects containing product information.so,PRODUCTS[0] points to the first product in array.HERE,PRODUCTobjid is the array index of PRODUCTS array and i'm accessing price of each product one by one through PRODUCTS[ PRODUCTobjid].price 
  const getTotalAmount=()=>{
    let totalAmount=0;
    let PRODUCTobjid=0;
    // i'm iterating through my cartitems and simultaneously incrementig PRODUCTobjid AND obviously multiplying thrm to get totalAmount.
    for (const item in cartItems){
  totalAmount+=cartItems[item]*PRODUCTS[ PRODUCTobjid].price;
  console.log(PRODUCTS[ PRODUCTobjid]);
  PRODUCTobjid++;
    }
   return totalAmount;   
    }
  
      
const ContextValue={cartItems,addToCart,removeFromCart,changeHandler,getTotalAmount}
  return <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>;
};
export default  ShopContextProvider