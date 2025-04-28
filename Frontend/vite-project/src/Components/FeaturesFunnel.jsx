import './FeaturesFunnel.css';

export default function FeaturesFunnel() {
  return (
    <section className="features-funnel">
      <div className="features-info">
        <h3>MULTIPLE PLATFORMS TOGETHER!</h3>
        <ul>
          <li>Email communication is a breeze with our fully integrated, drag & drop email builder.</li>
          <li>Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!</li>
          <li>Nurture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!</li>
        </ul>
      </div>
      <div className="funnel-graphic">
        <div className="funnel-placeholder">[Funnel Graphic]</div>
      </div>
    </section>
  );
}