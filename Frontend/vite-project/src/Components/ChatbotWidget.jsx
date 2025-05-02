import React, { useState } from 'react';
import './ChatbotWidget.css';
import chatbotIcon from '../Assets/chatbot.png';
import closeIcon from '../Assets/close.png'; 

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [chatMessages, setChatMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleIconClick = () => {
    setOpen((prev) => !prev);
    if (!open) setShowForm(true);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setChatMessages([...chatMessages, { text: input, from: 'user' }]);
      setInput('');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setShowForm(true);
    setInput('');
    setChatMessages([]);
    setForm({ name: '', phone: '', email: '' });
  };

  return (
    <div className="chatbot-widget">
      
      {!open && (
        <div className="chatbot-message">
          <span role="img" aria-label="robot" className="chatbot-emoji"></span>
          <span>
            👋 Want to chat about Hubly? I'm a chatbot here to help you find your way.
          </span>
        </div>
      )}
      {open && (
        <div className="chatbot-dialog">
          <div className="chatbot-dialog-header">
            <img src={chatbotIcon} alt="Hubly" className="chatbot-dialog-logo" />
            <span className="chatbot-dialog-title">Hubly</span>
          </div>
          <div className="chatbot-dialog-body">
            {showForm ? (
              <form className="chatbot-form" onSubmit={handleFormSubmit}>
                <div className="chatbot-form-title">Introduction Yourself</div>
                <label>
                  Your name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                  />
                </label>
                <label>
                  Your Phone
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    required
                  />
                </label>
                <label>
                  Your Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                  />
                </label>
                <button type="submit" className="chatbot-form-btn">
                  Thank You!
                </button>
              </form>
            ) : (
              <div className="chatbot-chat">
                <div className="chatbot-messages">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`chatbot-message chatbot-message-${msg.from}`}>
                      {msg.text}
                    </div>
                  ))}
                </div>
                <form className="chatbot-input-row" onSubmit={handleSend}>
                  <input
                    type="text"
                    placeholder="Write a message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" className="chatbot-send-btn" aria-label="Send">
                    <svg width="20" height="20" fill="#2563eb" viewBox="0 0 20 20"><path d="M2.94 17.94a1.5 1.5 0 0 0 1.6.33l13-5.5a1.5 1.5 0 0 0 0-2.74l-13-5.5A1.5 1.5 0 0 0 2 6.5v11a1.5 1.5 0 0 0 .94 1.44zM4 7.38l11.67 4.94L4 17.26V7.38z"/></svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      <img
        src={open ? closeIcon : chatbotIcon}
        alt="Chatbot"
        className="chatbot-icon"
        onClick={handleIconClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}