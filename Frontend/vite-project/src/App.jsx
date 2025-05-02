import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Partners from './components/Partners.jsx';
import CoreValue from './components/CoreValue.jsx';
import FeaturesFunnel from './components/FeaturesFunnel.jsx';
import PricingPlans from './components/PricingPlans.jsx';
import Footer from './components/Footer.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import ContactCentre from './components/ContactCentre.jsx';
import Analytics from './components/Analytics.jsx';
import ChatBot from './components/Chatbot.jsx';
import Team from './components/Team.jsx';
import Settings from './components/Settings.jsx';
import ChatbotWidget from './components/ChatbotWidget.jsx'; 
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