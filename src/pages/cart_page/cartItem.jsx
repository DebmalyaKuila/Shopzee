import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const {cartItems,addToCart,removeFromCart,changeHandler}=useContext(ShopContext);
  return (
    <React.Fragment>
      <div className="flex flex-row justify-between items-end border-solid border-2 border-black rounded-3xl m-6  p-6 bg-slate-100 pr-36">
      <div className="flex flex-row justify-start items-center ">
      <div className="productImage ">
        <img src={productImage} alt={productName} className="h-40 w-52" />
      </div>
      <div className="description flex flex-col">
        <p className="font-medium text-xl   cursor-pointer hover:text-blue-400 hover:underline">{productName}</p>
        <p className="font-medium text-xl">{price}</p>
      </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center font-medium">
          <p>Quantity:</p>
        </div>
        <div >
          <button className="border-solid border-2 border-black px-2 rounded-md font-medium" onClick={()=> removeFromCart(id)}>-</button>
          <input type="number" className="border-solid border-2 border-black px-2 rounded-md " value={cartItems[id]} onChange={(e)=>changeHandler(id,(e.target.value))}/>
          <button className="border-solid border-2 border-black px-2 rounded-md font-medium" onClick={()=> addToCart(id)}>+</button>
        </div>
      </div>
      </div>
      
      
    </React.Fragment>
  );
}

export default CartItem;
