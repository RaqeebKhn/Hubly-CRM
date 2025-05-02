import React, { useState } from "react";  
import { useNavigate } from "react-router-dom";  
import "./SignupPage.css";
import signupImg from "../Assets/loginhero.png";
import hubly from '../Assets/logo.png';

const API_BASE_URL = "https://hubly-crm-cu87.onrender.com";

export default function SignupPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  
  const [error, setError] = useState("");

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.success) {
        
        localStorage.setItem('token', data.token);
        
        navigate('/dashboard'); 
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="signup-root">
      <div className="signup-left">
        <div className="signup-header">
          <span className="logo-icon">
            <img src={hubly} alt="" />
          </span>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-title-row">
            <h2 className="signup-title">Create an account</h2>
            <a href="/login" className="signup-link">Sign in instead</a>
          </div>
          {error && <div className="error-message">{error}</div>}
          <input 
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input 
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input 
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="signup-checkbox-row">
            <input type="checkbox" id="terms" required />
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