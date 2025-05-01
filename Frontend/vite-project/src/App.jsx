import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import CoreValue from './components/CoreValue';
import FeaturesFunnel from './components/FeaturesFunnel';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import ContactCentre from './components/ContactCentre';
import Analytics from './components/Analytics';
import ChatBot from './components/Chatbot';
import Team from './components/Team';
import Settings from './components/Settings';
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
        {/* Landing Page Route */}
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

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
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