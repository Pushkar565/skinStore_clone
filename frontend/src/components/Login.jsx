import React from "react";
import logo from "../assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg";
import { Link } from 'react-router-dom';
import "./Login.css"; // Assuming you're managing styles in an external CSS file

const Login = () => {
  return (
    <div className="login-wrapper">
     <Link to ="/"> <div className="logo-container">
        <img src={logo} alt="skin-store logo" />
      </div>
</Link>
      <div className="login-container">
        {/* Existing Customer Login Section */}
        <section className="existing-customers">
          <h2>Existing Customers</h2>
          <form className="login-form">
            <div className="form-group">
              <div>
                {" "}
                <label htmlFor="email">* Email address</label>
              </div>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <div>
                {" "}
                <label htmlFor="password">* Password</label>{" "}
              </div>
              <input type="password" id="password" name="password" required />
            </div>
            <button className="forgot-password-btn" type="button">
              Forgot your password?
            </button>
            <div>
              {" "}
              <button className="sign-in-btn" type="submit">
                SIGN IN
              </button>
            </div>
          </form>

          <div className="social-login">
            <h5>Or, Continue with</h5>
            <div className="social-buttons">
              <button className="facebook-btn">Facebook</button>
              <button className="google-btn">Google</button>
            </div>
          </div>
        </section>

        {/* New Customer Registration Section */}
        <section className="new-customers">
          <h2>New Customers</h2>
          <Link to="/register">
            <button className="continue-btn">CONTINUE</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Login;
