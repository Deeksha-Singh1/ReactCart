import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import Cart from '../images/cart.png'

const Navbar = () => {
  return (
    <div className='bg-yellow-200 '>
      <nav className='container mx-auto flex items-center justify-between py-4 '>
       
          <Link to={"/"}>
            <img src={Logo} alt=""  style={{height:45, marginLeft:"20px"}}/>
          </Link>

          <ul className='flex items-center'>
            <li><Link to={"/"}>Home</Link></li>
            <li className='ml-6'><Link to={"/products"}>Products</Link></li>
            <li>
            <Link to={"/cart"}>
                <div style={{background:"teal",display:"flex", color:"white",padding: "6px 12px", borderRadius:"50px",marginLeft:'28px',marginRight:"20px"}}>
                  <span>10</span>
                  <img className='ml-1' src={Cart} alt=""/></div>
                
              </Link>
            </li>  
              
            
          </ul>
       
      

      </nav>
    </div>
  )
}

export default Navbar