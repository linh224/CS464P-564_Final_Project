import React from "react";

import logo from "./img/logo-book.png";

const NavBar = () => {
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

        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
<<<<<<< HEAD
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
            Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
            About
            </a>
          </li>
          <li className="nav-item">
=======
          <li className="nav-item d-block">
            <a className="nav-link" href="/dashboard">
              <i class="fa-solid fa-chart-simple"></i> Dashboard
            </a>
          </li>
          <li className="nav-item d-block">
            <a className="nav-link" href="/books">
              <i class="fa-solid fa-book"></i> Books
            </a>
          </li>

          <li className="nav-item d-block">
>>>>>>> books_page
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
         
        
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
