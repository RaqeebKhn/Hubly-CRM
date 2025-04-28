import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import CoreValue from './components/CoreValue';
import FeaturesFunnel from './components/FeaturesFunnel';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <Partners />
      <CoreValue />
      <FeaturesFunnel />
      <PricingPlans />
      <Footer />
    </div>
  );
}

export default App;