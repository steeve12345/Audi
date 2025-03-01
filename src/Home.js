import React from 'react'
import audi from "./audi1.png";
import Product from './Product';

const Home = () => {
  return (
   
    <div> <nav className="navbar">
    <div className="logo">  <img className='logo' src={audi} alt=''/></div>
    <ul className="nav-links"> 
    
      <li><a href="/home" className='k'>Home</a></li>
      <li><a href="#" className='a'>Contact</a></li>
      <li><a href="#" className='r'>About</a></li>

      <input type="text" placeholder="Search products..." className="search-bar" />

    </ul>
  
    
  </nav>
  
      <Product/>
  
  </div>
  )
}

export default Home;

