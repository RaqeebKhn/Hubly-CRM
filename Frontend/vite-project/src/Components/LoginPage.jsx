import './LoginPage.css'; 
import { Link } from 'react-router-dom'; 
import loginhero from '../Assets/loginhero.png'
import hubly from '../Assets/logo.png';

export default function LoginPage() { 
  return ( 
    <div className="login-root"> 
      <div className="login-left"> 
        <div className="header-logo" style={{ marginBottom: "2.5rem" }}> 
          <span className="logo-icon">
                <img src={hubly} alt="" />
            </span>
        </div>
        <h2 className="login-title">Sign in to your Plexify</h2>
        <form className="login-form">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" autoComplete="username" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="current-password" />
          <button type="submit" className="login-btn" disabled>Log in</button>
        </form>
        <div className="login-links">
          <a href="#" className="forgot-link">Forgot password?</a>
          <div>
            Don't have an account? <Link to="#" className="signup-link">Sign up</Link>
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