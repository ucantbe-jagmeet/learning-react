import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <a href="#"> Logo</a>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/user/New/Guest">User</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
