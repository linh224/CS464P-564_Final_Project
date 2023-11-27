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
              <i className="fa-solid fa-house"></i> Home
            </a>
          </li>
          <li className="nav-item d-block">
            <a className="nav-link" href="/dashboard">
              <i className="fa-solid fa-chart-simple"></i> Dashboard
            </a>
          </li>
          <li className="nav-item d-block">
            <a className="nav-link" href="/books">
              <i className="fa-solid fa-book"></i> Books
            </a>
          </li>

          <li className="nav-item d-block">
            <a className="nav-link" href="/contact">
              <i className="fa-solid fa-envelope"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
