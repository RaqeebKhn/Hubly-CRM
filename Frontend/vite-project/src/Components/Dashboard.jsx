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
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample ticket data - replace with your actual data
  const [tickets] = useState([
    {
      id: '2023-00123',
      avatar: 'JS',
      time: '12:45 AM',
      message: 'Hey!',
      userName: 'John Snow',
      userId: '1-91-000000000',
      email: 'example@gmail.com',
      status: 'unresolved'
    },
    // Add more tickets here as needed
  ]);

  // Filter tickets based on search query and active tab
  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = 
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.userId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.message.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = 
      activeTab === 'all' || 
      ticket.status === activeTab;

    return matchesSearch && matchesTab;
  });

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
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <svg 
    className="search-icon" 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z" 
      fill="#9CA3AF"
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

          {filteredTickets.map(ticket => (
            <div key={ticket.id} className="ticket-item">
              <div className="ticket-header">
                <div className="ticket-avatar">{ticket.avatar}</div>
                <div className="ticket-title">Ticket# {ticket.id}</div>
                <div className="ticket-time">Posted at {ticket.time}</div>
              </div>
              <div className="ticket-message">{ticket.message}</div>
              <div className="ticket-footer">
                <div className="user-info">
                  <span className="user-name">{ticket.userName}</span>
                  <span className="user-id">{ticket.userId}</span>
                  <span className="user-email">{ticket.email}</span>
                </div>
                <button className="open-ticket">Open Ticket</button>
              </div>
            </div>
          ))}

          {filteredTickets.length === 0 && (
            <div className="no-tickets">
              No tickets found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}