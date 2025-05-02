import './FeaturesFunnel.css';
import funnel from '../Assets/funnelimg.png';

export default function FeaturesFunnel() {
  return (
    <section className="features-funnel">
      <div className="features-info">
        <h3>MULTIPLE PLATFORMS TOGETHER!</h3>
        <p>Email communication is a breeze with our fully integrated, drag & drop email builder.</p>
        <h3>CLOSE</h3>
        <p>Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!</p>
        <h3>NURTURE</h3>
        <p>Nurture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!</p>   
      </div>
      <div className="funnel-graphic">
        <img src={funnel} alt="Features Funnel" className="funnel-image" />
      </div>
    </section>
  );
}