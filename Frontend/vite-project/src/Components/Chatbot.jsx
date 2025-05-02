import React, { useState } from 'react';
import './Chatbot.css';
import chatbotIcon from '../Assets/chatbot.png';

export default function Chatbot() {
 
  const [headerColor, setHeaderColor] = useState('#33475B');
  const [bgColor, setBgColor] = useState('#EEEEEE');
  const [messages, setMessages] = useState(['How can I help you?', 'Ask me anything!']);
  const [editingMsg, setEditingMsg] = useState([false, false]);
  const [form, setForm] = useState({
    name: 'Your name',
    phone: '+1 (000) 000-0000',
    email: 'example@gmail.com',
  });
  const [editingForm, setEditingForm] = useState({ name: false, phone: false, email: false });
  const [welcomeMsg, setWelcomeMsg] = useState("👋 Want to chat about Hubly? I'm a chatbot here to help you find your way.");
  const [editingWelcome, setEditingWelcome] = useState(false);
  const [missedTimer, setMissedTimer] = useState({ h: 12, m: 9, s: 59 });
  const [editingTimer, setEditingTimer] = useState(false);

  
  const headerColors = ['#fff', '#000', '#33475B'];
  const bgColors = ['#fff', '#000', '#EEEEEE'];

  
  const handleHeaderColor = (color) => setHeaderColor(color);
  const handleBgColor = (color) => setBgColor(color);

 
  const handleEditMsg = (idx) => setEditingMsg(editingMsg.map((e, i) => i === idx ? true : e));
  const handleMsgChange = (idx, value) => setMessages(messages.map((m, i) => i === idx ? value : m));
  const handleMsgBlur = (idx) => setEditingMsg(editingMsg.map((e, i) => i === idx ? false : e));

  
  const handleEditForm = (field) => setEditingForm({ ...editingForm, [field]: true });
  const handleFormChange = (field, value) => setForm({ ...form, [field]: value });
  const handleFormBlur = (field) => setEditingForm({ ...editingForm, [field]: false });

  
  const handleEditWelcome = () => setEditingWelcome(true);
  const handleWelcomeChange = (value) => setWelcomeMsg(value);
  const handleWelcomeBlur = () => setEditingWelcome(false);

 
  const handleTimerChange = (field, value) => {
    let v = value.replace(/\D/g, '');
    if (v.length > 2) v = v.slice(0, 2);
    setMissedTimer({ ...missedTimer, [field]: v });
  };

  return (
    <div className="chatbot-customization-page">
      <div className="chatbot-sidebar"></div>

      
      <div className="chatbot-preview-area">
        <div className="chatbot-preview" style={{ background: bgColor }}>
          <div className="chatbot-preview-header" style={{ background: headerColor }}>
            <img src={chatbotIcon} alt="Hubly" className="chatbot-preview-logo" />
            <span className="chatbot-preview-title">Hubly</span>
          </div>
          <div className="chatbot-preview-body">
            <div className="chatbot-preview-message">{messages[0]}</div>
            <div className="chatbot-preview-message">{messages[1]}</div>
            <div className="chatbot-preview-form">
              <div className="chatbot-preview-form-title">Introduction Yourself</div>
              <div className="chatbot-preview-form-label">Your name</div>
              <div className="chatbot-preview-form-value">{form.name}</div>
              <div className="chatbot-preview-form-label">Your Phone</div>
              <div className="chatbot-preview-form-value">{form.phone}</div>
              <div className="chatbot-preview-form-label">Your Email</div>
              <div className="chatbot-preview-form-value">{form.email}</div>
              <button className="chatbot-preview-form-btn">Thank You!</button>
            </div>
          </div>
          <div className="chatbot-preview-input-row">
            <input type="text" placeholder="Write a message" disabled />
            <button className="chatbot-preview-send-btn" disabled>
              <svg width="20" height="20" fill="#2563eb" viewBox="0 0 20 20"><path d="M2.94 17.94a1.5 1.5 0 0 0 1.6.33l13-5.5a1.5 1.5 0 0 0 0-2.74l-13-5.5A1.5 1.5 0 0 0 2 6.5v11a1.5 1.5 0 0 0 .94 1.44zM4 7.38l11.67 4.94L4 17.26V7.38z"/></svg>
            </button>
          </div>
        </div>
        <div className="chatbot-preview-welcome">
          <div className="chatbot-message">
            <span role="img" aria-label="robot" className="chatbot-emoji">🤖</span>
            <span>{welcomeMsg}</span>
            <span className="chatbot-message-close">×</span>
          </div>
        </div>
      </div>

      
      <div className="chatbot-customization-cards">
        
        <div className="chatbot-card">
          <div className="chatbot-card-title">Header Color</div>
          <div className="chatbot-color-options">
            {headerColors.map((color) => (
              <div
                key={color}
                className={`color-circle${headerColor === color ? ' selected' : ''}`}
                style={{ background: color }}
                onClick={() => handleHeaderColor(color)}
              ></div>
            ))}
            <input className="color-input" value={headerColor} readOnly />
          </div>
        </div>
        
        <div className="chatbot-card">
          <div className="chatbot-card-title">Custom Background Color</div>
          <div className="chatbot-color-options">
            {bgColors.map((color) => (
              <div
                key={color}
                className={`color-circle${bgColor === color ? ' selected' : ''}`}
                style={{ background: color }}
                onClick={() => handleBgColor(color)}
              ></div>
            ))}
            <input className="color-input" value={bgColor} readOnly />
          </div>
        </div>
        
        <div className="chatbot-card">
          <div className="chatbot-card-title">Customize Message</div>
          {[0, 1].map((idx) => (
            <div className="chatbot-custom-message-row" key={idx}>
              {editingMsg[idx] ? (
                <input
                  className="chatbot-custom-message-input"
                  value={messages[idx]}
                  onChange={e => handleMsgChange(idx, e.target.value)}
                  onBlur={() => handleMsgBlur(idx)}
                  autoFocus
                />
              ) : (
                <input
                  className="chatbot-custom-message-input"
                  value={messages[idx]}
                  readOnly
                  onClick={() => handleEditMsg(idx)}
                />
              )}
              <span className="chatbot-edit-icon" onClick={() => handleEditMsg(idx)}>✎</span>
            </div>
          ))}
        </div>
        
        <div className="chatbot-card">
          <div className="chatbot-card-title">Introduction Form</div>
          <div className="chatbot-form-preview">
            {['name', 'phone', 'email'].map((field) => (
              <div key={field}>
                <div className="chatbot-form-label">{field === 'name' ? 'Your name' : field === 'phone' ? 'Your Phone' : 'Your Email'}</div>
                {editingForm[field] ? (
                  <input
                    className="chatbot-form-value"
                    value={form[field]}
                    onChange={e => handleFormChange(field, e.target.value)}
                    onBlur={() => handleFormBlur(field)}
                    autoFocus
                  />
                ) : (
                  <div
                    className="chatbot-form-value"
                    onClick={() => handleEditForm(field)}
                    style={{ cursor: 'pointer' }}
                  >
                    {form[field]}
                  </div>
                )}
              </div>
            ))}
            <button className="chatbot-form-btn">Thank You!</button>
          </div>
        </div>
        
        <div className="chatbot-card">
          <div className="chatbot-card-title">Welcome Message</div>
          <div className="chatbot-welcome-preview">
            <div className="chatbot-message">
              <span role="img" aria-label="robot" className="chatbot-emoji">🤖</span>
              {editingWelcome ? (
                <input
                  className="chatbot-custom-message-input"
                  value={welcomeMsg}
                  onChange={e => handleWelcomeChange(e.target.value)}
                  onBlur={handleWelcomeBlur}
                  autoFocus
                />
              ) : (
                <span onClick={handleEditWelcome} style={{ cursor: 'pointer' }}>{welcomeMsg}</span>
              )}
              <span className="chatbot-message-close">×</span>
            </div>
            <span className="chatbot-edit-icon" onClick={handleEditWelcome}>✎</span>
          </div>
        </div>
        {/* Missed chat timer */}
        <div className="chatbot-card">
          <div className="chatbot-card-title">Missed chat timer</div>
          <div className="chatbot-timer-row">
            <input
              className="chatbot-timer-input"
              value={missedTimer.h}
              onChange={e => handleTimerChange('h', e.target.value)}
              maxLength={2}
            />
            <span>:</span>
            <input
              className="chatbot-timer-input"
              value={missedTimer.m}
              onChange={e => handleTimerChange('m', e.target.value)}
              maxLength={2}
            />
            <span>:</span>
            <input
              className="chatbot-timer-input"
              value={missedTimer.s}
              onChange={e => handleTimerChange('s', e.target.value)}
              maxLength={2}
            />
          </div>
          <button className="chatbot-timer-save-btn">Save</button>
        </div>
      </div>
    </div>
  );
}