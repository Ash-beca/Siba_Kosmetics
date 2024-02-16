import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <a href='#' className='logo'><img src={logo} alt='some' /></a>
      </div>
      <ul className='links'>
        <Link to='/'> Home
        </Link>
        <Link to='/products'> Products
        </Link>
        <Link to='/about'> About
        </Link>
        <Link to='/contact'> Contact
        </Link>
      </ul>
      <div className='login'>
        <p>
          Login
        </p>
      </div>
    </nav>
  );
};

export default Navbar;