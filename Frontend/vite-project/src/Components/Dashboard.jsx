import React, { useState, useEffect } from 'react';
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
  const [tickets, setTickets] = useState([]);

  // Fetch tickets when component mounts
  useEffect(() => {
    fetchTickets();
  }, []);

  // Fetch tickets from backend
  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tickets', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setTickets(data.tickets);
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="main-content">
        <h1 className="dashboard-title">Dashboard</h1>
        
        {/* Search Bar */}
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

        {/* Tickets Section */}
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

          {/* Dummy Ticket */}
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

          {/* Real Tickets */}
          {tickets.map(ticket => (
            <div key={ticket._id} className="ticket-item">
              <div className="ticket-header">
                <div className="ticket-info">
                  <div className="ticket-title">{ticket.ticketId}</div>
                  <div className="ticket-time">
                    {new Date(ticket.createdAt).toLocaleString()}
                  </div>
                </div>
                <div className="ticket-status">
                  <span className={`status-badge ${ticket.status}`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
              <div className="ticket-message">{ticket.message}</div>
              <div className="ticket-footer">
                <div className="user-info">
                  <div className="user-avatar">
                    {ticket.createdBy.firstName?.[0]}{ticket.createdBy.lastName?.[0]}
                  </div>
                  <div className="user-details">
                    <div className="user-name">
                      {ticket.createdBy.firstName} {ticket.createdBy.lastName}
                    </div>
                    <div className="user-meta">
                      <span className="user-email">{ticket.createdBy.email}</span>
                    </div>
                  </div>
                </div>
                <div className="ticket-actions">
                  <button className="open-ticket">Open Ticket</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}