import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';
import logo from '../../img/sw-logo.png';

const Header = () => {
  return (
    <div className='bg-light p-3'>
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
        <div className="favorites">
          favorites
        </div>
      </div>
    </div>
  );
};
export default Header;