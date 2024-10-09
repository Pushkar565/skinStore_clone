import React, { useState } from 'react';
import './DropdownMenu.css'; // Assuming we'll create a CSS file for styling

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Track the active menu section

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Toggle menu on click
  };

  return (
    <div className="dropdown-container">
      {/* Horizontal menu */}
      <div className="menu">
        <div className="menu-item" onMouseEnter={() => toggleMenu('Discover')} onMouseLeave={() => toggleMenu(null)}>
          Discover Dermstore
          {activeMenu === 'Discover' && (
            <div className="submenu">
              <p>Shop All Dermstore</p>
              <p>Bestsellers</p>
              <p>New In</p>
              <p>Best of Dermstore</p>
              <p>BeautyFix</p>
              <p>Ask the Esthetician</p>
              <p>Skin 101</p>
              <p>Shop All Sale</p>
              <p>Save 20%</p>
              <p>Save 25%</p>
              <p>Save 30%</p>
            </div>
          )}
        </div>

        <div className="menu-item" onMouseEnter={() => toggleMenu('SkinCare')} onMouseLeave={() => toggleMenu(null)}>
          Skin Care
          {activeMenu === 'SkinCare' && (
            <div className="submenu">
              <p>Cleansers</p>
              <p>Toners & Mists</p>
              <p>Serums & Treatments</p>
              <p>Moisturizers</p>
              <p>Kits & Sets</p>
            </div>
          )}
        </div>

        <div className="menu-item" onMouseEnter={() => toggleMenu('Sunscreen')} onMouseLeave={() => toggleMenu(null)}>
          Sunscreen
          {activeMenu === 'Sunscreen' && (
            <div className="submenu">
              <p>Face Sunscreen</p>
              <p>Body Sunscreen</p>
              <p>Kits & Sets</p>
              <p>Travel Size</p>
            </div>
          )}
        </div>

        <div className="menu-item" onMouseEnter={() => toggleMenu('HairCare')} onMouseLeave={() => toggleMenu(null)}>
          Hair Care
          {activeMenu === 'HairCare' && (
            <div className="submenu">
              <p>Shampoo</p>
              <p>Conditioner</p>
              <p>Styling Products</p>
              <p>Kits & Sets</p>
              <p>Travel Size</p>
            </div>
          )}
        </div>

        <div className="menu-item" onMouseEnter={() => toggleMenu('Makeup')} onMouseLeave={() => toggleMenu(null)}>
          Makeup
          {activeMenu === 'Makeup' && (
            <div className="submenu">
              <p>Face & Cheeks</p>
              <p>Eyes</p>
              <p>Lips</p>
            </div>
          )}
        </div>

        <div className="menu-item" onMouseEnter={() => toggleMenu('Tools')} onMouseLeave={() => toggleMenu(null)}>
          Tools & Devices
          {activeMenu === 'Tools' && (
            <div className="submenu">
              <p>Skin Care Tools & Devices</p>
              <p>Hair Care Tools & Accessories</p>
            </div>
          )}
        </div>

        <div className="menu-item" onMouseEnter={() => toggleMenu('Brands')} onMouseLeave={() => toggleMenu(null)}>
          Brands
          {activeMenu === 'Brands' && (
            <div className="submenu">
              <p>A</p>
              <p>B</p>
              <p>C</p>
              <p>D</p>
              <p>E</p>
              {/* Add additional letters and brands as needed */}
            </div>
          )}
        </div>

        <div className="menu-item" onMouseEnter={() => toggleMenu('Sale')} onMouseLeave={() => toggleMenu(null)}>
          Sale
          {activeMenu === 'Sale' && (
            <div className="submenu">
              <p>Sale</p>
              <p>Clearance</p>
              <p>All Coupons</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
