import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header.jsx';
import HeroSection from './Components/HeroSection.jsx';
import Partners from './Components/Partners.jsx';
import CoreValue from './Components/CoreValue.jsx';
import FeaturesFunnel from './Components/FeaturesFunnel.jsx';
import PricingPlans from './Components/PricingPlans.jsx';
import Footer from './Components/Footer.jsx';
import LoginPage from './Components/LoginPage.jsx';
import SignupPage from './Components/SignupPage.jsx';
import Dashboard from './Components/Dashboard.jsx';
import ContactCentre from './Components/ContactCentre.jsx';
import Analytics from './Components/Analytics.jsx';
import ChatBot from './Components/Chatbot.jsx';
import Team from './Components/Team.jsx';
import Settings from './Components/Settings.jsx';
import ChatbotWidget from './Components/ChatbotWidget.jsx'; 
import './App.css';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

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
              <ChatbotWidget /> 
            </div>
          }
        />

        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact-centre"
          element={
            <ProtectedRoute>
              <ContactCentre />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <ChatBot />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;