import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
