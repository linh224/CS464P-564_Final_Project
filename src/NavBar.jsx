import React from 'react';

import logo from './img/logo-book.png';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg '>
      <div className='container-fluid text-dark'>
        <div>
          <img
            className='d-inline-block align-top'
            alt='icon-logo'
            src={logo}
            height='40'
          />
        </div>

        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='/'>
              HOME
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/dashboard'>
              DASHBOARD
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/about'>
              ABOUT
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/contact'>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
