import './LoginPage.css'; 
import { Link, useNavigate } from 'react-router-dom'; 
import loginhero from '../Assets/loginhero.png'
import hubly from '../Assets/logo.png';
import { useState } from 'react';

export default function LoginPage() { 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return ( 
    <div className="login-root"> 
      <div className="login-left"> 
        <div className="header-logo" style={{ marginBottom: "2.5rem" }}> 
          <span className="logo-icon">
            <img src={hubly} alt="" />
          </span>
        </div>
        <h2 className="login-title">Sign in to your Plexify</h2>
        {error && <div className="error-message">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            name="email"
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            name="password"
            type="password" 
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-btn">Log in</button>
        </form>
        <div className="login-links">
          <a href="#" className="forgot-link">Forgot password?</a>
          <div>
            Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link> 
          </div>
        </div>
        <div className="login-legal">
          This site is protected by reCAPTCHA and the
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
          and
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          apply.
        </div>
      </div> 
      <div className="login-right"> 
        <span>
          <img src={loginhero} alt="" />
        </span>
      </div> 
    </div> 
  ); 
} 