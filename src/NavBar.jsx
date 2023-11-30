import React from "react";
import { NavLink } from "react-router-dom";

import logo from "./img/logo-book.png";

const NavBar = () => {
<<<<<<< HEAD
=======
  const activeLink = "bg-light text-primary";
  const normalLink = "";

>>>>>>> main
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid text-dark">
        <div>
          <img
            className="d-inline-block align-top"
            alt="icon-logo"
            src={logo}
            height="40"
          />
        </div>
<<<<<<< HEAD

        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/books">
              Bestsellers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
=======
        <div className="w-full">
          <ul className="nav custom-list">
            <li className=" nav-item">
              <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `linkStyle ${isActive ? activeLink : normalLink}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
>>>>>>> main
      </div>
    </nav>
  );
};

export default NavBar;
