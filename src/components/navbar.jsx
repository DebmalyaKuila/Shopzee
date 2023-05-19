import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"
import logo from "../Images/download (2).svg"

const Navbar = () => {
  return (
    <header>
<div className='navbar'>
        <div className="links">
            <div >
                <img src={logo} alt="Shopzee" />
            </div>
        <div>
        <Link to="/">Shop</Link>
        <Link to="/cart">
            <ShoppingCart size={35}/>
        </Link>
        </div>
        </div>
        
     
    </div>
    </header>
    
  )
}

export default Navbar
