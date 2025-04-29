import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import CoreValue from './components/CoreValue';
import FeaturesFunnel from './components/FeaturesFunnel';
import PricingPlans from './components/PricingPlans';
import Footer from './Components/Footer';
import LoginPage from './Components/LoginPage';
import SignupPage from './components/SignupPage';
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
        <Route path="/signup" element={<SignupPage />} />
      </Routes> 
    </Router>
  );
}

export default App;