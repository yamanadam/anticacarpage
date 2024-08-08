import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <p>YMN VİSİON</p>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
