import { NavLink } from 'react-router-dom';

import logo from './img/logo-book.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  const activeLink = 'bg-light';
  const normalLink = '';

  return (
    <Navbar expand='lg'>
      <img
        className='d-inline-block align-top'
        alt='icon-logo'
        src={logo}
        height='40'
        style={{
          width: '150px',
          height: '100px',
          overflow: 'hidden',
          objectFit: 'cover',
        }}
      />
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav
          className='navbar-nav w-100 justify-content-end'
          style={{ fontFamily: 'Cocogoose' }}
        >
          <NavLink
            to='/'
            className={({ isActive }) =>
              `linkStyle ${isActive ? activeLink : normalLink}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              `linkStyle ${isActive ? activeLink : normalLink}`
            }
          >
            DASHBOARD
          </NavLink>
          <NavLink
            to='/isbncategory'
            className={({ isActive }) =>
              `linkStyle ${isActive ? activeLink : normalLink}`
            }
          >
            BESTSELLERS
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `linkStyle ${isActive ? activeLink : normalLink}`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `linkStyle ${isActive ? activeLink : normalLink}`
            }
          >
            CONTACT
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
