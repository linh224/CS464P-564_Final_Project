import { NavLink } from 'react-router-dom';

import logo from './img/logo-book.png';

const NavBar = () => {
  const activeLink = 'bg-light';
  const normalLink = '';

  return (
    <nav className='navbar navbar-expand-lg '>
      <div className='container-fluid'>
        <div>
          <img
            className='d-inline-block align-top'
            alt='icon-logo'
            src={logo}
            height='40'
            style = {{width: '150px', height: '100px', overflow: 'hidden', objectFit: 'cover'}}
          />
        </div>

        <div className='w-full'>
          <ul className='nav custom-list'>
            <li className=' nav-item'>
              <NavLink
                exact
                to='/'
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                HOME
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/dashboard'
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                DASHBOARD
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/isbncategory'
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                BESTSELLERS
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
