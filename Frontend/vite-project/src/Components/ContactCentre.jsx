import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ContactCentre.css';
import hubly from '../Assets/logo.png';
import dashboardIcon from '../Assets/dashboard.png';
import contactCentreIcon from '../Assets/contact-centre.png';
import analyticsIcon from '../Assets/analytics.png';
import chatBotIcon from '../Assets/chatbot.png';
import teamIcon from '../Assets/team.png';
import settingsIcon from '../Assets/settings.png';
import userIcon from '../Assets/user.png';
import phoneIcon from '../Assets/phone.png';
import emailIcon from '../Assets/email.png';
import ticketIcon from '../Assets/ticket.png';
import joeDoeAvatar from '../Assets/joe-doe.png'; 
import chat1Avatar from '../Assets/chat1.png';    
import chat2Avatar from '../Assets/chat2.png';    

export default function ContactCentre() {
  
  const chats = [
    {
      id: 1,
      name: 'Chat 1',
      message: 'I have a question',
      avatar: chat1Avatar
    },
    {
      id: 2,
      name: 'Chat 2',
      message: 'Ask me anything!',
      avatar: chat2Avatar
    }
  ];

  
  const [selectedChat, setSelectedChat] = useState(1);

  
  const [chatMessages, setChatMessages] = useState({
    1: [
      {
        sender: 'Chat 1',
        avatar: chat1Avatar,
        text: 'I have a question',
        align: 'left',
        isLink: false,
      }
    ],
    2: [
      {
        sender: 'Chat 2',
        avatar: chat2Avatar,
        text: 'Ask me anything!',
        align: 'left',
        isLink: false,
      }
    ]
  });

  
  const [messageInputs, setMessageInputs] = useState({
    1: '',
    2: ''
  });

  
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [selectedTeammate, setSelectedTeammate] = useState(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [ticketStatus, setTicketStatus] = useState('Open');
  const [chatReassigned, setChatReassigned] = useState(false);
  const location = useLocation();

  
  const teamDropdownRef = useRef(null);
  const statusDropdownRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        teamDropdownRef.current &&
        !teamDropdownRef.current.contains(event.target)
      ) {
        setShowTeamDropdown(false);
      }
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setShowStatusDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const chatDetails = {
    ticketId: '2025-00123',
    name: 'Joe doe',
    phone: '+1 (000) 000-0000',
    email: 'example@gmail.com',
    teammates: ['Joe Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson', 'Tom Brown'],
    status: 'Open'
  };

  
  const handleTeamDropdownClick = () => {
    setShowTeamDropdown(!showTeamDropdown);
  };

  const handleTeammateSelect = (teammate) => {
    setSelectedTeammate(teammate);
    setShowConfirmationPopup(true);
    setShowTeamDropdown(false);
  };

  const handleConfirmTeammate = () => {
    chatDetails.teammates[0] = selectedTeammate;
    setShowConfirmationPopup(false);
    setSelectedTeammate(null);
    setChatReassigned(true); 
  };

  const handleCancelTeammate = () => {
    setShowConfirmationPopup(false);
    setSelectedTeammate(null);
  };

  
  const handleStatusDropdownClick = () => {
    setShowStatusDropdown(!showStatusDropdown);
  };

  const handleStatusSelect = (status) => {
    setTicketStatus(status);
    setShowStatusDropdown(false);
    if (status === 'Resolved') {
      setShowStatusPopup(true);
    }
  };

  const handleCloseStatusPopup = () => {
    setShowStatusPopup(false);
  };

  
  const handleSend = () => {
    const msg = messageInputs[selectedChat];
    if (!msg || msg.trim() === '') return;
    setChatMessages({
      ...chatMessages,
      [selectedChat]: [
        ...chatMessages[selectedChat],
        {
          sender: 'Joe Doe',
          avatar: joeDoeAvatar,
          text: msg,
          align: 'right',
          isLink: msg.startsWith('http'),
        }
      ]
    });
    setMessageInputs({
      ...messageInputs,
      [selectedChat]: ''
    });
  };

  
  const handleInputChange = (e) => {
    setMessageInputs({
      ...messageInputs,
      [selectedChat]: e.target.value
    });
  };

  
  const handleChatSelect = (id) => {
    setSelectedChat(id);
    setChatReassigned(false); 
  };

  
  const currentChat = chats.find(c => c.id === selectedChat);

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
        <div className="contact-center-container">
          
          <div className="contact-sidebar">
            <div className="contact-header">
              <h2>Contact Center</h2>
            </div>
            
            <div className="chats-section">
              <div className="chats-header">
                <h3>Chats</h3>
              </div>
              <div className="chat-list">
                {chats.map(chat => (
                  <div 
                    key={chat.id} 
                    className={`chat-item ${selectedChat === chat.id ? 'active' : ''}`}
                    onClick={() => handleChatSelect(chat.id)}
                  >
                    <img src={chat.avatar} alt={chat.name} className="chat-avatar-img chat-avatar-sidebar" />
                    <div className="chat-info">
                      <div className="chat-name">{chat.name}</div>
                      <div className="chat-preview">{chat.message}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="chat-area">
            <div className="chat-header">
              <h3>Ticket# {chatDetails.ticketId}</h3>
              <Link to="/dashboard">
                <img src={dashboardIcon} alt="Dashboard" className="header-dashboard-icon" />
              </Link>
            </div>
            {chatReassigned ? (
              <div className="chat-reassigned-container">
                <div className="chat-reassigned-date">
                  <span></span>
                  <span>March 7, 2025</span>
                  <span></span>
                </div>
                <div className="chat-reassigned-message">
                  This chat is assigned to new team member. you no longer have access.
                </div>
              </div>
            ) : (
              <>
                <div className="chat-messages">
                  <div className="messages-container">
                    <div className="message-date">March 7, 2025</div>
                    {(chatMessages[selectedChat] || []).map((msg, idx) => (
                      <div
                        key={idx}
                        className={`message ${msg.align === 'right' ? 'message-right' : 'message-left'}`}
                      >
                        {msg.align === 'left' && (
                          <img src={msg.avatar} alt={msg.sender} className="message-avatar-img" />
                        )}
                        <div className="message-content">
                          <div className={`message-sender ${msg.align === 'right' ? 'sender-right' : ''}`}>
                            {msg.sender}
                          </div>
                          <div className="message-text">
                            {msg.isLink ? (
                              <a href={msg.text} target="_blank" rel="noopener noreferrer">{msg.text}</a>
                            ) : (
                              msg.text
                            )}
                          </div>
                        </div>
                        {msg.align === 'right' && (
                          <img src={msg.avatar} alt={msg.sender} className="message-avatar-img" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="chat-input">
                  <textarea
                    placeholder="Type here"
                    value={messageInputs[selectedChat] || ''}
                    onChange={handleInputChange}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                  />
                  <button className="send-button" onClick={handleSend}>
                    <span>➤</span>
                  </button>
                </div>
              </>
            )}
          </div>

          
          <div className="details-sidebar">
            <div className="details-header">
              <img src={currentChat.avatar} alt={currentChat.name} className="user-avatar" />
              <div>Chat</div>
            </div>
            
            <div className="details-section">
              <h3>Details</h3>
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <img src={userIcon} alt="User" className="detail-icon" />
                  <div>{chatDetails.name}</div>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <img src={phoneIcon} alt="Phone" className="detail-icon" />
                  <div>{chatDetails.phone}</div>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon-wrapper">
                  <img src={emailIcon} alt="Email" className="detail-icon" />
                  <div>{chatDetails.email}</div>
                </div>
              </div>
            </div>

            <div className="teammates-section" ref={teamDropdownRef}>
              <h3>Teammates</h3>
              <div className="teammate-select" onClick={handleTeamDropdownClick}>
                <div className="teammate-avatar">👤</div>
                <div className="teammate-name">{chatDetails.teammates[0]}</div>
                <span className="dropdown-arrow">▼</span>
                {showConfirmationPopup && (
                  <div className="popup-overlay">
                    <div className="popup-content">
                      <h3>Team Member</h3>
                      <p>Chat would be assigned to Different team member</p>
                      <div className="popup-buttons">
                        <button className="cancel-button" onClick={handleCancelTeammate}>
                          Cancel
                        </button>
                        <button className="confirm-button" onClick={handleConfirmTeammate}>
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {showTeamDropdown && (
                <div className="teammates-dropdown">
                  {chatDetails.teammates.map((teammate, index) => (
                    <div
                      key={index}
                      className="teammate-option"
                      onClick={() => handleTeammateSelect(teammate)}
                    >
                      <div className="teammate-avatar">👤</div>
                      <div className="teammate-name">{teammate}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="status-section">
              <h3>
                <div className="status-header">
                  <img src={ticketIcon} alt="Ticket" className="detail-icon" />
                  <span>Ticket status</span>
                </div>
              </h3>
              <div className="status-select" onClick={handleStatusDropdownClick} ref={statusDropdownRef}>
                <span className="status-indicator"></span>
                <span className="status-text">{ticketStatus}</span>
                <span className="dropdown-arrow">▼</span>
                {showStatusDropdown && (
                  <div className="status-dropdown">
                    <div className="status-option" onClick={() => handleStatusSelect('Resolved')}>Resolved</div>
                    <div className="status-option" onClick={() => handleStatusSelect('Unresolved')}>Unresolved</div>
                  </div>
                )}
                {showStatusPopup && (
                  <div className="popup-overlay">
                    <div className="popup-content">
                      <p>Chat will be closed</p>
                      <div className="popup-buttons">
                        <button className="cancel-button" onClick={handleCloseStatusPopup}>
                          Cancel
                        </button>
                        <button className="confirm-button" onClick={handleCloseStatusPopup}>
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}