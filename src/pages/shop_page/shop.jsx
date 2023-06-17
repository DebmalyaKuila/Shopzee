import React from 'react'
import { PRODUCTS } from '../../products'
import "./shop.css"
import Product from './Product'
import Searchbar from '../../components/searchbar'

function Shop() {
  return (
   <React.Fragment>
    <Searchbar placeholder="Enter your item name" data={PRODUCTS}/>
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
   </React.Fragment>
  
  )
}

export default Shop
