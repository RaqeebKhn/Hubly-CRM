import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src={hubly} alt="Hubly" />
        </div>
        <nav className="nav-items">
          <Link 
            to="/dashboard" 
            className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
            <span className="nav-label">Dashboard</span>
          </Link>
          <Link 
            to="/contact-centre" 
            className={`nav-item ${location.pathname === '/contact-centre' ? 'active' : ''}`}
          >
            <img src={contactCentreIcon} alt="Contact Centre" className="nav-icon" />
            <span className="nav-label">Contact Centre</span>
          </Link>
          <Link 
            to="/analytics" 
            className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}
          >
            <img src={analyticsIcon} alt="Analytics" className="nav-icon" />
            <span className="nav-label">Analytics</span>
          </Link>
          <Link 
            to="/chatbot" 
            className={`nav-item ${location.pathname === '/chatbot' ? 'active' : ''}`}
          >
            <img src={chatBotIcon} alt="Chat Bot" className="nav-icon" />
            <span className="nav-label">Chat Bot</span>
          </Link>
          <Link 
            to="/team" 
            className={`nav-item ${location.pathname === '/team' ? 'active' : ''}`}
          >
            <img src={teamIcon} alt="Team" className="nav-icon" />
            <span className="nav-label">Team</span>
          </Link>
          <Link 
            to="/settings" 
            className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}
          >
            <img src={settingsIcon} alt="Settings" className="nav-icon" />
            <span className="nav-label">Settings</span>
          </Link>
        </nav>
      </div>

      <div className="main-content">
        <h1 className="dashboard-title">Dashboard</h1>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for ticket"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg 
            className="search-icon" 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 10.8958 10.8958 13.75 7.375 13.75C3.85418 13.75 1 10.8958 1 7.375C1 3.85418 3.85418 1 7.375 1C10.8958 1 13.75 3.85418 13.75 7.375Z" 
              stroke="#94A3B8" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
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
              <div className="ticket-info">
                <div className="ticket-title">Ticket# 2023-00123</div>
                <div className="ticket-time">Posted at 12:45 AM</div>
              </div>
              <div className="ticket-duration">10:00</div>
            </div>
            <div className="ticket-message">Hey!</div>
            <div className="ticket-footer">
              <div className="user-info">
                <div className="user-avatar">JS</div>
                <div className="user-details">
                  <div className="user-name">John Snow</div>
                  <div className="user-meta">
                    <span className="user-id">1-91-000000000</span>
                    <span className="user-email">example@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="ticket-actions">
                <button className="open-ticket">Open Ticket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}