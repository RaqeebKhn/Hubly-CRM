import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Grow Your Business Faster with Hubly CRM</h1>
        <p>Manage leads, automate workflows, and close deals effortlessly—all in one powerful platform.</p>
        <div className="hero-cta">
          <button className="get-started-btn">Get started</button>
          <button className="watch-video-btn">▶ Watch Video</button>
        </div>
        <div className="hero-partners">
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-placeholder">[Image]</div>
        <div className="hero-stat-card">
          <span>Net Sales</span>
          <strong>$19,765</strong>
        </div>
      </div>
    </section>
  );
}