import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <header>
        <a href="#">LoGo</a>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <h1>About Page</h1>
      </section>
    </>
  );
};

export default About;
