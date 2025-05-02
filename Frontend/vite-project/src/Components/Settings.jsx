import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Settings.css';
import hubly from '../Assets/logo.png';
import dashboardIcon from '../Assets/dashboard.png';
import contactCentreIcon from '../Assets/contact-centre.png';
import analyticsIcon from '../Assets/analytics.png';
import chatBotIcon from '../Assets/chatbot.png';
import teamIcon from '../Assets/team.png';
import settingsIcon from '../Assets/settings.png';

export default function Settings() {
  const location = useLocation();
  const [form, setForm] = useState({
    firstName: 'Sarthak',
    lastName: 'Pal',
    email: 'Sarthakpal08@gmail.com',
    password: '**********',
    confirmPassword: '**********',
  });
  const [showTooltip, setShowTooltip] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTooltip = (field, show) => {
    setShowTooltip((prev) => ({ ...prev, [field]: show }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src={hubly} alt="Hubly" />
        </div>
        <nav className="nav-items">
          <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
            <span className="nav-label">Dashboard</span>
          </Link>
          <Link to="/contact-centre" className={`nav-item ${location.pathname === '/contact-centre' ? 'active' : ''}`}>
            <img src={contactCentreIcon} alt="Contact Centre" className="nav-icon" />
            <span className="nav-label">Contact Centre</span>
          </Link>
          <Link to="/analytics" className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
            <img src={analyticsIcon} alt="Analytics" className="nav-icon" />
            <span className="nav-label">Analytics</span>
          </Link>
          <Link to="/chatbot" className={`nav-item ${location.pathname === '/chatbot' ? 'active' : ''}`}>
            <img src={chatBotIcon} alt="Chat Bot" className="nav-icon" />
            <span className="nav-label">Chat Bot</span>
          </Link>
          <Link to="/team" className={`nav-item ${location.pathname === '/team' ? 'active' : ''}`}>
            <img src={teamIcon} alt="Team" className="nav-icon" />
            <span className="nav-label">Team</span>
          </Link>
          <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
            <img src={settingsIcon} alt="Settings" className="nav-icon" />
            <span className="nav-label">Settings</span>
          </Link>
        </nav>
      </div>
      <div className="main-content settings-main-content">
        <div className="settings-card">
          <div className="settings-tabs">
            <div className="settings-tab active">Edit Profile</div>
          </div>
          <form className="settings-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="settings-form-row">
              <label>First name
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </label>
            </div>
            <div className="settings-form-row">
              <label>Last name
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </label>
            </div>
            <div className="settings-form-row info-row">
              <label>Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <span
                  className="info-icon"
                  onMouseEnter={() => handleTooltip('email', true)}
                  onMouseLeave={() => handleTooltip('email', false)}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="8.25" stroke="#B0B3B8" strokeWidth="1.5"/>
                    <rect x="8.25" y="7" width="1.5" height="5" rx="0.75" fill="#B0B3B8"/>
                    <rect x="8.25" y="5" width="1.5" height="1.5" rx="0.75" fill="#B0B3B8"/>
                  </svg>
                </span>
                {showTooltip.email && (
                  <span className="tooltip">Change email will log you out immediately</span>
                )}
              </label>
            </div>
            <div className="settings-form-row info-row">
              <label>Password
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <span
                  className="info-icon"
                  onMouseEnter={() => handleTooltip('password', true)}
                  onMouseLeave={() => handleTooltip('password', false)}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="8.25" stroke="#B0B3B8" strokeWidth="1.5"/>
                    <rect x="8.25" y="7" width="1.5" height="5" rx="0.75" fill="#B0B3B8"/>
                    <rect x="8.25" y="5" width="1.5" height="1.5" rx="0.75" fill="#B0B3B8"/>
                  </svg>
                </span>
                {showTooltip.password && (
                  <span className="tooltip">Change password will log you out immediately</span>
                )}
              </label>
            </div>
            <div className="settings-form-row info-row">
              <label>Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <span
                  className="info-icon"
                  onMouseEnter={() => handleTooltip('confirmPassword', true)}
                  onMouseLeave={() => handleTooltip('confirmPassword', false)}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="8.25" stroke="#B0B3B8" strokeWidth="1.5"/>
                    <rect x="8.25" y="7" width="1.5" height="5" rx="0.75" fill="#B0B3B8"/>
                    <rect x="8.25" y="5" width="1.5" height="1.5" rx="0.75" fill="#B0B3B8"/>
                  </svg>
                </span>
                {showTooltip.confirmPassword && (
                  <span className="tooltip">User will logged out immediately</span>
                )}
              </label>
            </div>
            <div className="settings-form-actions">
              <button className="settings-save-btn" type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}