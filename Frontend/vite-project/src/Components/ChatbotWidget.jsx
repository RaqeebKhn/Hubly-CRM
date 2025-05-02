import React, { useEffect, useState, useRef } from 'react';
import './ChatbotWidget.css';
import chatbotIcon from '../Assets/chatbot.png';

export default function ChatbotWidget() {
  const [showMessage, setShowMessage] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
   
    const handleClick = () => {
      setShowMessage(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setShowMessage(true), 5000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="chatbot-widget">
      {showMessage && (
        <div className="chatbot-message">
          <span role="img" aria-label="robot" className="chatbot-emoji"></span>
          <span>
            👋 Want to chat about Hubly? I'm a chatbot here to help you find your way.
          </span>
        </div>
      )}
      <img
        src={chatbotIcon}
        alt="Chatbot"
        className="chatbot-icon"
      />
    </div>
  );
}