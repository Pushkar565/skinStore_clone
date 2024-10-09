import React from 'react';
import logo from '../assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg'; 
import './Navbar.css'; 
const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="Skinstore logo" />
      </div>

      {/* Search Bar Section */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for a product or brand" />
        <button className="search-button">
          <img src="" alt="Search" />
        </button>
      </div>

      {/* Account Section */}
      <div className="navbar-account">
        <img src="" alt="Account Icon" />
        <p>Account</p>
      </div>

      {/* Cart Section */}
      <div className="navbar-cart">
        <img src="" alt="Cart Icon" />
        <p>Cart</p>
      </div>
    </nav>
  );
};

export default Navbar;
