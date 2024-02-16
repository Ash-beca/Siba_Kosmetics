import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href='#' className='logo'><img src='./img/logo.jpg' alt='some' /></a>
      </div>
      <ul className='links'>
        <a href='#'>Home</a>
        <a href='#'>Products</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </ul>
      <div className='icon'>
        <a href='#' className='search'><img src='./img/search.jpg' alt='some' /></a>
        <a href='#' className='cart'><img src='./img/shopping-cart.png' alt='anything' /></a>
      </div>
    </nav>
  );
};

export default Navbar;
