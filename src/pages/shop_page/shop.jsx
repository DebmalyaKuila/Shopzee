import React from 'react'
import { PRODUCTS } from '../../products'
import "./shop.css"
import Product from './Product'

function Shop() {
  return (
   <main>
     <div>
      <div className='Shop'>
        <div className='ShopName'>
        <h1>Get your phone on Shopzee</h1>
        </div>
        <div className='Products'>
            {PRODUCTS.map( (product)=> (<Product data={product} key={product.id}/>))}
        </div>
      </div>
      
    </div>
   </main>
  )
}

export default Shop
