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
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import ContactCentre from './components/ContactCentre';
import Analytics from './components/Analytics';
import ChatBot from './components/Chatbot';
import Team from './components/Team';
import Settings from './components//Settings';
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
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="contact-centre" element={<ContactCentre />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="chatbot" element={<ChatBot />} />
          <Route path="team" element={<Team />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;