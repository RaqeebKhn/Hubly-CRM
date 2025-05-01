import React, { useState } from 'react';
import './ContactCentre.css';

export default function ContactCentre() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  
  const chats = [
    {
      id: 1,
      name: 'Chat 1',
      message: 'I have a question',
      avatar: '👤'
    },
    {
      id: 2,
      name: 'Chat 2',
      message: 'Ask me anything!',
      avatar: '👤'
    }
  ];

  
  const chatDetails = {
    ticketId: '2025-00123',
    name: 'Joe doe',
    phone: '+1 (000) 000-0000',
    email: 'example@gmail.com',
    teammates: ['Joe doe'],
    status: 'Open'
  };

  return (
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
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="chat-avatar">{chat.avatar}</div>
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
        </div>
        <div className="chat-messages">
          
          <div className="message-date">March 7, 2025</div>
          <div className="message">
            <div className="message-avatar">👤</div>
            <div className="message-content">
              <div className="message-sender">Chat 1</div>
              <div className="message-text">I have a question</div>
            </div>
          </div>
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-button">
            <span>➤</span>
          </button>
        </div>
      </div>

      
      <div className="details-sidebar">
        <div className="details-header">
          <div className="user-avatar">👤</div>
          <div>Chat</div>
        </div>
        
        <div className="details-section">
          <h3>Details</h3>
          <div className="detail-item">
            <label>Name</label>
            <div>{chatDetails.name}</div>
          </div>
          <div className="detail-item">
            <label>Phone</label>
            <div>{chatDetails.phone}</div>
          </div>
          <div className="detail-item">
            <label>Email</label>
            <div>{chatDetails.email}</div>
          </div>
        </div>

        <div className="teammates-section">
          <h3>Teammates</h3>
          <div className="teammate-select">
            <div className="teammate-avatar">👤</div>
            <div className="teammate-name">{chatDetails.teammates[0]}</div>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>

        <div className="status-section">
          <h3>Ticket status</h3>
          <div className="status-select">
            <span className="status-indicator"></span>
            <span className="status-text">{chatDetails.status}</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </div>
    </div>
  );
}