import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-spacex.png";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">
              <li>
                <p>Home</p>
              </li>
            </Link>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/">
        <div className="navbar-center">
          <img className="w-72 max-w-fit" src={logo} alt="Spacex Logo" />
        </div>
      </Link>
      <div className="navbar-end">
       
      </div>
    </div>
  );
};

export default Navbar;
