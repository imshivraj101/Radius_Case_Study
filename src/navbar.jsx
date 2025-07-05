import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">Radius</div>
      <div className="navbar-right">
        <a
          href="https://www.linkedin.com/in/shivraj-talekar-259099336/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Shivraj Talekar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
