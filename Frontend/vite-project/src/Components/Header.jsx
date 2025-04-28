import './Header.css';
import hubly from '../Assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-icon">
          <img src={hubly} alt="" />
        </span>
        {/* <span className="logo-text">Hubly</span> */}
      </div>
      <nav className="header-nav">
        <a href="#" className="login-btn">Login</a>
        <a href="#" className="signup-btn">Sign up</a>
      </nav>
    </header>
  );
}