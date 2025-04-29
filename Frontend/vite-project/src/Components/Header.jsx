import './Header.css';
import { Link } from 'react-router-dom';
import hubly from '../Assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-icon">
          <img src={hubly} alt="" />
        </span>
        
      </div>
      <nav className="header-nav">
      <Link to="/login" className="login-btn">Login</Link>
        <a href="#" className="signup-btn">Sign up</a>
      </nav>
    </header>
  );
}