import React from "react";
import logo from "../assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg";
import "./Register.css";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-wrapper">
   <Link to="/">
   <div className="logo-container">
        <img src={logo} alt="skin-store logo" />
      </div></Link>

      <div className="register-container">
        {/* New Customer Registration Section */}
        <section className="new-customer-section">
          <h2>Create an Account</h2>
          <form className="register-form">
            <div className="form-group">
              <div>
                <label htmlFor="firstName">* First Name</label>
              </div>
              <input type="text" id="firstName" name="firstName" required />
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="lastName">* Last Name</label>
              </div>
              <input type="text" id="lastName" name="lastName" required />
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="email">* Email address</label>
              </div>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="password">* Password</label>
              </div>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="confirmPassword">* Confirm Password</label>
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
            </div>

            <div>
              <button className="create-account-btn" type="submit">
                CREATE ACCOUNT
              </button>
            </div>
          </form>

          <div className="social-register">
            <h5>Or, Sign Up with</h5>
            <div className="social-buttons">
              <button className="facebook-btn">Facebook</button>
              <button className="google-btn">Google</button>
            </div>
          </div>
        </section>

        {/* Existing Customers Section */}
        <section className="existing-customers">
          <h2>Already have an account?</h2>
          <Link to="/login">
            <button className="sign-in-btn">SIGN IN</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Register;
