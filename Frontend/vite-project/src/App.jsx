import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import CoreValue from './components/CoreValue';
import FeaturesFunnel from './components/FeaturesFunnel';
import PricingPlans from './components/PricingPlans';
import Footer from './Components/Footer';
import LoginPage from './Components/LoginPage';
import './App.css';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route
          path="/"
          element={
            <div className="app-container">
              <Header />
              <HeroSection />
              <Partners />
              <CoreValue />
              <FeaturesFunnel />
              <PricingPlans />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes> 
    </Router>
  );
}

export default App;