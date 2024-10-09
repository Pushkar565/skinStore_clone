import React from 'react';
import './_Footer.css'; // Assuming you have a CSS file for footer-specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Help & Information Section */}
        <div className="footer-section">
          <h4>Help & Information</h4>
          <ul>
            <li>Customer Service</li>
            <li>Delivery Information</li>
            <li>Returns & Refunds</li>
            <li>Help Center</li>
            <li>Track my order</li>
            <li>Accessibility</li>
            <li>Cookie Settings</li>
          </ul>
        </div>

        {/* About SkinStore Section */}
        <div className="footer-section">
          <h4>About SkinStore</h4>
          <ul>
            <li>About Us</li>
            <li>Brand Directory</li>
            <li>Coupon Codes</li>
            <li>Refer A Friend</li>
            <li>Join SkinStore Experts</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Cookie Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Modern Slavery Statement</li>
          </ul>
        </div>

        {/* How To Contact Us Section */}
        <div className="footer-section">
          <h4>How To Contact Us</h4>
          <ul>
            <li>Message Us</li>
            <li>Free Beauty Consultations</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
