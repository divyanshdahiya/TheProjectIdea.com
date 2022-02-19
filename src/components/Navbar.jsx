import React, { useState } from "react";
import "./styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => settoggle(false)}>
        <img className="nav-logo-img" src="../logo.png" alt="Logo" />
        <h1>The Project Idea</h1>
      </Link>
      <div>
        <ul
          className={toggle ? "nav-links-mobile" : "nav-links"}
          onClick={() => settoggle(false)}
        >
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="nav-link">
            <li>About </li>
          </Link>
          <Link to="/contact" className="nav-link">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <button className="mobile-menu-icon" onClick={() => settoggle(!toggle)}>
        {toggle ? <ImCross /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
}

export default Navbar;
