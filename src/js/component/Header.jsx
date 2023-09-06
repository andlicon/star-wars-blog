import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/header.css';
import logo from '../../img/sw-logo.png';
// components
import Favorites from './Favorites.jsx';

const Header = () => {
  return (
    <div className='header p-1'>
      <div
        className='container
                  d-flex 
                  justify-content-between 
                  align-items-center'>
        {/* logo*/}
        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        {/* Favorites */}
        <Favorites />
      </div>
    </div>
  );
};
export default Header;