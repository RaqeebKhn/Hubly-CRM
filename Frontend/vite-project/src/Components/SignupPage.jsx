import React from "react";
import "./SignupPage.css";
import signupImg from "../Assets/loginhero.png"; 
import hubly from '../Assets/logo.png';

export default function SignupPage() {
  return (
    <div className="signup-root">
      <div className="signup-left">
        <div className="signup-header">
           <span className="logo-icon">
                <img src={hubly} alt="" />
            </span>
        </div>
        <form className="signup-form">
          <div className="signup-title-row">
            <h2 className="signup-title">Create an account</h2>
            <a href="/login" className="signup-link">Sign in instead</a>
          </div>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="signup-checkbox-row">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By creating an account, I agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="signup-btn">Create an account</button>
        </form>
        <div className="signup-legal">
          This site is protected by reCAPTCHA and the
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Google Privacy Policy </a>
          and
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Terms of Service </a>
          apply.
        </div>
      </div>
      <div className="signup-right">
        <img src={signupImg} alt="Signup visual" />
      </div>
    </div>
  );
}