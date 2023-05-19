import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart,cartItems }=useContext(ShopContext);
  let cartItemsAmount =cartItems[id];
  return (
    <div className="Product ">
      <div className="flex justify-center items-center ">
        <img src={productImage} alt={productName} />
      </div>
      <div className="description">
        <p className="hover:text-blue-400 hover:underline hover:cursor-pointer">{productName}</p>
        <p>Price:{price}</p>
        <button onClick={()=>addToCart(id) }>Add to cart{cartItemsAmount>0 && <>({cartItemsAmount})</>}</button>
      </div>

      
    </div>
  );
}

export default Product;
