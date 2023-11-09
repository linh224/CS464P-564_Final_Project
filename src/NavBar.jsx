import React from "react";
import logo from "./img/logo-book.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary inline-flex ">
      <div className="container-fluid text-light">
      <img
            className="d-inline-block align-top"
            alt="icon-logo"
            src={logo}
            width="60"
            height="40"
        />
        
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/books">
              Books
            </a>
          </li>
          <li className="nav-item">
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