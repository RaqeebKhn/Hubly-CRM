import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="logo-icon">☁️</span>
        <span className="logo-text">Hubly</span>
      </div>
      <div className="footer-links">
        <div>
          <h4>Product</h4>
          <ul>
            <li>Universal checkout</li>
            <li>Payment workflows</li>
            <li>Observability</li>
            <li>UpliftAI</li>
            <li>Apps & integrations</li>
          </ul>
        </div>
        <div>
          <h4>Why Primer</h4>
          <ul>
            <li>Expand to new markets</li>
            <li>Boost payment success</li>
            <li>Improve conversion rates</li>
            <li>Reduce payments fraud</li>
            <li>Recover revenue</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Success stories</li>
            <li>News room</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4>Developers</h4>
          <ul>
            <li>Primer Docs</li>
            <li>API Reference</li>
            <li>Payment methods guide</li>
            <li>Service status</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <span>[Social Icons]</span>
      </div>
    </footer>
  );
}