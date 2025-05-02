import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Team.css';
import hubly from '../Assets/logo.png';
import dashboardIcon from '../Assets/dashboard.png';
import contactCentreIcon from '../Assets/contact-centre.png';
import analyticsIcon from '../Assets/analytics.png';
import chatBotIcon from '../Assets/chatbot.png';
import teamIcon from '../Assets/team.png';
import settingsIcon from '../Assets/settings.png';

const initialMembers = [
  { name: 'John Snow', phone: '+1-91-000000000', email: 'example@gmail.com', role: 'Admin' },
  { name: 'Arya Stark', phone: '+1-91-111111111', email: 'arya@gmail.com', role: 'Member' },
  { name: 'Tyrion Lannister', phone: '+1-91-222222222', email: 'tyrion@gmail.com', role: 'Member' },
  { name: 'Daenerys Targaryen', phone: '+1-91-333333333', email: 'daenerys@gmail.com', role: 'Member' },
  { name: 'Bran Stark', phone: '+1-91-444444444', email: 'bran@gmail.com', role: 'Member' },
];

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function Team() {
  const location = useLocation();
  const [members, setMembers] = useState(initialMembers);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', role: 'Member' });

  const handleOpenModal = () => {
    setForm({ name: '', email: '', role: 'Member' });
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMembers([
      ...members,
      {
        name: form.name,
        phone: '',
        email: form.email,
        role: form.role,
      },
    ]);
    setShowModal(false);
  };

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
        <div className="team-header">
          <h1 className="team-title">Team Management</h1>
        </div>

        <div className="team-table-container">
          <table className="team-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="user-cell">
                      <div className="user-avatar">{getInitials(member.name)}</div>
                      <div className="user-name">{member.name}</div>
                    </div>
                  </td>
                  <td>{member.phone}</td>
                  <td>{member.email}</td>
                  <td>{member.role}</td>
                  <td>
                    <div className="action-icons">
                      <button className="action-btn edit-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.3333 2.00001C11.5084 1.82491 11.7163 1.686 11.9452 1.59111C12.1741 1.49623 12.4194 1.44727 12.6667 1.44727C12.9139 1.44727 13.1592 1.49623 13.3881 1.59111C13.617 1.686 13.8249 1.82491 14 2.00001C14.1751 2.17511 14.314 2.38305 14.4089 2.61194C14.5038 2.84082 14.5527 3.08614 14.5527 3.33334C14.5527 3.58055 14.5038 3.82587 14.4089 4.05476C14.314 4.28364 14.1751 4.49158 14 4.66668L4.66667 14L1.33334 14.6667L2 11.3333L11.3333 2.00001Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="action-btn delete-btn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4H3.33333H14" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.33334 4V2.66667C5.33334 2.31305 5.47382 1.97391 5.72387 1.72386C5.97392 1.47381 6.31306 1.33334 6.66668 1.33334H9.33334C9.68696 1.33334 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31305 10.6667 2.66667V4M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66668C4.31306 14.6667 3.97392 14.5262 3.72387 14.2761C3.47382 14.0261 3.33334 13.687 3.33334 13.3333V4H12.6667Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="add-team-btn add-team-btn-below" onClick={handleOpenModal}>
          <span className="plus-icon">+</span>
          Add Team members
        </button>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">Add Team members</h2>
              <p className="modal-desc">Talk with colleagues in a group chat. Messages in this group are only visible to its participants. New teammates may only be invited by the administrators.</p>
              <form className="add-member-form" onSubmit={handleSubmit}>
                <label>User name
                  <input
                    type="text"
                    name="name"
                    placeholder="User name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>Email ID
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>Designation
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                  >
                    <option value="Member">Member</option>
                    <option value="Admin">Admin</option>
                  </select>
                </label>
                <div className="modal-buttons">
                  <button type="button" className="cancel-btn" onClick={handleCloseModal}>Cancel</button>
                  <button type="submit" className="save-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
