import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';
import hubly from '../Assets/logo.png';
import dashboardIcon from '../Assets/dashboard.png';
import contactCentreIcon from '../Assets/contact-centre.png';
import analyticsIcon from '../Assets/analytics.png';
import chatBotIcon from '../Assets/chatbot.png';
import teamIcon from '../Assets/team.png';
import settingsIcon from '../Assets/settings.png';

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      
      <div className="sidebar">
        <div className="logo">
          <img src={hubly} alt="Hubly" />
        </div>
        <nav className="nav-items">
          <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
            <span className="nav-label">Dashboard</span>
          </NavLink>
          
          <NavLink to="/dashboard/contact-centre" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <img src={contactCentreIcon} alt="Contact Centre" className="nav-icon" />
            <span className="nav-label">Contact Centre</span>
          </NavLink>
          
          <NavLink to="/dashboard/analytics" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <img src={analyticsIcon} alt="Analytics" className="nav-icon" />
            <span className="nav-label">Analytics</span>
          </NavLink>
          
          <NavLink to="/dashboard/chatbot" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <img src={chatBotIcon} alt="Chat Bot" className="nav-icon" />
            <span className="nav-label">Chat Bot</span>
          </NavLink>
          
          <NavLink to="/dashboard/team" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <img src={teamIcon} alt="Team" className="nav-icon" />
            <span className="nav-label">Team</span>
          </NavLink>
          
          <NavLink to="/dashboard/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <img src={settingsIcon} alt="Settings" className="nav-icon" />
            <span className="nav-label">Settings</span>
          </NavLink>
        </nav>
      </div>

      
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}


