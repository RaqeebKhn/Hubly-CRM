import './HeroSection.css';
import hero from '../Assets/meeting.png';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-bg">
      <div className="hero-wave"></div>
      <div className="hero-main">
        <div className="hero-left">
          <h1>
            Grow Your Business Faster<br />
            with <span className="hubly-highlight">Hubly CRM</span>
          </h1>
          <p className="hero-desc">
            Manage leads, automate workflows, and close deals effortlessly—all in one powerful platform.
          </p>
          <div className="hero-cta-row">
            <Link to="/signup" className="hero-btn-primary">Get started</Link>
            <button className="hero-btn-secondary">
              <span className="hero-play">&#9654;</span> Watch Video
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={hero}
            alt="CRM Dashboard"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}