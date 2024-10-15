import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from '../assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg'; 
import './Navbar.css'; 
import accountLogo from '../assets/logo/account.jpg';
import searchIcon from '../assets/logo/icons8-search.svg';
;
import cartLogo from '../assets/logo/icons8-cart-96.png';
import WishlistLogo from "../assets/logo/icons8-heart-100.png";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <Link to="/"> {/* Wrap the logo with Link for navigation */}
        <div className="navbar-logo">
          <img src={logo} alt="Skinstore logo" />
        </div>
      </Link>
      
      {/* Search Bar Section */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for a product or brand" />
        <button className="search-button">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>

      {/* Account Section */}
      <Link to="/Login"> 
        <div className="navbar-account">
          <img src={accountLogo} alt="Account Icon" />
          <p>Account</p>
        </div>
      </Link>

      {/* Wishlist Section */}
      <Link to="/Wishlist">
        <div className="navbar-wishlist"> {/* Changed class name for clarity */}
          <img src={WishlistLogo} alt="Wishlist Icon" />
          <p>Wishlist</p>
        </div>
      </Link>

      {/* Cart Section */}
      <Link to="/Cart">
        <div className="navbar-cart">
          <img src={cartLogo} alt="Cart Icon" />
          <p>Cart</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
