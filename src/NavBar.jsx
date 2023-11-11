import React from "react";
//import logo from "./img/logo-book.png";

const NavBar = () => {
  return (
    <nav className="p-5 m-1 align-items-start navbar navbar-expand-lg navbar-dark inline-flex h-100 ">
      <div className="text-light">
        {/* <div>
          <img
            className="d-inline-block align-top"
            alt="icon-logo"
            src={logo}
            width="60"
            height="40"
          />
        </div> */}

        <ul className="">
          <li className="nav-item active d-block">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item d-block">
            <a className="nav-link" href="/books">
              Books
            </a>
          </li>
          <li className="nav-item d-block">
            <a className="nav-link" href="/search">
              Search
            </a>
          </li>
          <li className="nav-item d-block">
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
