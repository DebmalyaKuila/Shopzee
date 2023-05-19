import React, { useContext } from 'react';
import {PRODUCTS} from "../../products"
import { ShopContext } from '../../context/shop-context';
import CartItem from './cartItem';
function Cart() {
  const {cartItems,getTotalAmount}=useContext(ShopContext);
  let totalAmount=getTotalAmount();
  return (
    <React.Fragment>
      <main>
      <div>
     <h1 className=' text-black text-6xl p-16'>Your cart</h1>
    </div>
    <div className=' flex flex-col justify-around w-full m-6  p-6'>
    <div className="cartlist w-full">
     {
      PRODUCTS.map( (product) => {
        if (cartItems[product.id] !==0){
          return <CartItem data={product}/>
        }
      } )
     }
    </div>
    {
      totalAmount>0 ?
<div className='flex flex-row mx-10  p-8 justify-between'>
      <div className='border-solid border-slate-400 border-2 h-full w-2/12 rounded-lg'>
        <button className='border-none outline-none h-full w-full  '><p className='px-4 py-2  text-2xl font-medium'>Promo Code ?</p></button>
      </div>
      <div className='w-4/12 flex flex-col justify-center items-start'>
        <div className='w-full flex flex-row justify-between items-center my-4 '>
          <div className='font-bold'>Subtotal</div>
          <div className='font-bold'>{totalAmount} /-</div>
        </div>
        <div className='my-4 '>
         <p > Shipping,taxes and discounts calculated at checkout</p>
        </div>
        <div className='w-full my-4 '>
         <button className='border-none outline-none bg-blue-700 text-white rounded-xl w-full'><p className='px-8 py-4 text-xl font-semibold'> Checkout</p></button>
        </div>
      </div>
    </div> : <h1 className='text-3xl'>Nothing added to the cart</h1>
    }
    
    </div>
      </main>

    </React.Fragment>
   
  )
}

export default Cart
