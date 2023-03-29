import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <header>
        <a href="#">LoGo</a>
        <nav>
          <ul>
            <li>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{ textDecoration: "none" }}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h1>Contact Page</h1>
      </section>
    </>
  );
};

export default Contact;
