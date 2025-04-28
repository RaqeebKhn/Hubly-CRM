import './PricingPlans.css';

export default function PricingPlans() {
  return (
    <section className="pricing-plans">
      <h2>We have plans for everyone!</h2>
      <div className="plans-container">
        <div className="plan-card">
          <h3>STARTER</h3>
          <p>Best for local businesses needing to improve their online reputation.</p>
          <div className="plan-price">$199 <span>/monthly</span></div>
          <ul>
            <li>Unlimited Users</li>
            <li>GMB Messaging</li>
            <li>Reputation Management</li>
            <li>GMB Call Tracking</li>
            <li>24/7 Award Winning Support</li>
          </ul>
          <button className="plan-btn">SIGN UP FOR STARTER</button>
        </div>
        <div className="plan-card">
          <h3>GROW</h3>
          <p>Best for all businesses that want to take full control of their marketing automation and track their leads, click to close.</p>
          <div className="plan-price">$399 <span>/monthly</span></div>
          <ul>
            <li>Pipeline Management</li>
            <li>Marketing Automation Campaigns</li>
            <li>Live Call Transfer</li>
            <li>GMB Messaging</li>
            <li>Embed-able Form Builder</li>
            <li>Reputation Management</li>
            <li>24/7 Award Winning Support</li>
          </ul>
          <button className="plan-btn">SIGN UP FOR STARTER</button>
        </div>
      </div>
    </section>
  );
}