
import React, { useState } from 'react';
import './Dashboard.css';
import hubly from '../Assets/logo.png';
import dashboardIcon from '../Assets/dashboard.png';
import contactCentreIcon from '../Assets/contact-centre.png';
import analyticsIcon from '../Assets/analytics.png';
import chatBotIcon from '../Assets/chatbot.png';
import teamIcon from '../Assets/team.png';
import settingsIcon from '../Assets/settings.png';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="dashboard-container">
      
      
<div className="sidebar">
  <div className="logo">
    <img src={hubly} alt="Hubly" />
  </div>
  <nav className="nav-items">
    <a href="#" className="nav-item active">
      <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
      <span className="nav-label">Dashboard</span>
    </a>
    <a href="#" className="nav-item">
      <img src={contactCentreIcon} alt="Contact Centre" className="nav-icon" />
      <span className="nav-label">Contact Centre</span>
    </a>
    <a href="#" className="nav-item">
      <img src={analyticsIcon} alt="Analytics" className="nav-icon" />
      <span className="nav-label">Analytics</span>
    </a>
    <a href="#" className="nav-item">
      <img src={chatBotIcon} alt="Chat Bot" className="nav-icon" />
      <span className="nav-label">Chat Bot</span>
    </a>
    <a href="#" className="nav-item">
      <img src={teamIcon} alt="Team" className="nav-icon" />
      <span className="nav-label">Team</span>
    </a>
    <a href="#" className="nav-item">
      <img src={settingsIcon} alt="Settings" className="nav-icon" />
      <span className="nav-label">Settings</span>
    </a>
  </nav>
</div>

      
      <div className="main-content">
        <h1 className="dashboard-title">Dashboard</h1>
        
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for ticket"
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        
        <div className="tickets-section">
          <div className="ticket-tabs">
            <button 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <span className="tab-icon">✉️</span> All Tickets
            </button>
            <button 
              className={`tab ${activeTab === 'resolved' ? 'active' : ''}`}
              onClick={() => setActiveTab('resolved')}
            >
              Resolved
            </button>
            <button 
              className={`tab ${activeTab === 'unresolved' ? 'active' : ''}`}
              onClick={() => setActiveTab('unresolved')}
            >
              Unresolved
            </button>
          </div>

          
          <div className="ticket-item">
            <div className="ticket-header">
              <div className="ticket-avatar">JS</div>
              <div className="ticket-title">Ticket# 2023-00123</div>
              <div className="ticket-time">Posted at 12:45 AM</div>
            </div>
            <div className="ticket-message">Hey!</div>
            <div className="ticket-footer">
              <div className="user-info">
                <span className="user-name">John Snow</span>
                <span className="user-id">1-91-000000000</span>
                <span className="user-email">example@gmail.com</span>
              </div>
              <button className="open-ticket">Open Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}