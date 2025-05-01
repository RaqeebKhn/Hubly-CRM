import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Analytics.css';
import hubly from '../Assets/logo.png';
import dashboardIcon from '../Assets/dashboard.png';
import contactCentreIcon from '../Assets/contact-centre.png';
import analyticsIcon from '../Assets/analytics.png';
import chatBotIcon from '../Assets/chatbot.png';
import teamIcon from '../Assets/team.png';
import settingsIcon from '../Assets/settings.png';

export default function Analytics() {
  const weeks = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7','Week 8','Week 9','Week 10'];
  const missedChats = [12, 15, 9, 8, 13, 7, 10, 12, 17, 20];
  const location = useLocation();

  const resolvedPercent = 80;
  const totalChats = 122;
  const avgReplyTime = 0;

  const maxChats = Math.max(...missedChats, 25);
  const chartWidth = "100%";
  const chartHeight = "100%";
  const viewBox = "0 0 800 300";
  const chartPadding = 60;
  const graphWidth = 700;
  const graphHeight = 200;

  const points = missedChats.map((val, i) => {
    const x = chartPadding + (i * (graphWidth - chartPadding) / (missedChats.length - 1));
    const y = graphHeight - ((val / maxChats) * graphHeight);
    return [x, y];
  });

  const tooltipIndex = 4;
  const tooltipX = points[tooltipIndex][0];
  const tooltipY = points[tooltipIndex][1];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src={hubly} alt="Hubly" />
        </div>
        <nav className="nav-items">
          <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
            <span className="nav-label">Dashboard</span>
          </Link>
          <Link to="/contact-centre" className={`nav-item ${location.pathname === '/contact-centre' ? 'active' : ''}`}>
            <img src={contactCentreIcon} alt="Contact Centre" className="nav-icon" />
            <span className="nav-label">Contact Centre</span>
          </Link>
          <Link to="/analytics" className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}>
            <img src={analyticsIcon} alt="Analytics" className="nav-icon" />
            <span className="nav-label">Analytics</span>
          </Link>
          <Link to="/chatbot" className={`nav-item ${location.pathname === '/chatbot' ? 'active' : ''}`}>
            <img src={chatBotIcon} alt="Chat Bot" className="nav-icon" />
            <span className="nav-label">Chat Bot</span>
          </Link>
          <Link to="/team" className={`nav-item ${location.pathname === '/team' ? 'active' : ''}`}>
            <img src={teamIcon} alt="Team" className="nav-icon" />
            <span className="nav-label">Team</span>
          </Link>
          <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
            <img src={settingsIcon} alt="Settings" className="nav-icon" />
            <span className="nav-label">Settings</span>
          </Link>
        </nav>
      </div>

      <div className="main-content">
        <div className="analytics-main">
          <div className="analytics-header">Analytics</div>

          <div className="analytics-section">
            <div className="analytics-title">Missed Chats</div>
            <div className="analytics-chart-container">
              <svg width={chartWidth} height={chartHeight} viewBox={viewBox} preserveAspectRatio="xMidYMid meet" className="analytics-chart">
                <line x1={chartPadding} y1={graphHeight} x2={graphWidth} y2={graphHeight} stroke="#eee" />
                <line x1={chartPadding} y1={0} x2={chartPadding} y2={graphHeight} stroke="#eee" />
                
                {[0, 5, 10, 15, 20, 25].map((tick, i) => {
                  const y = graphHeight - ((tick / maxChats) * graphHeight);
                  return (
                    <text key={i} x={chartPadding - 20} y={y + 5} fontSize="14" fill="#aaa">
                      {tick.toString().padStart(2, '0')}
                    </text>
                  );
                })}
                
                {weeks.map((w, i) => {
                  const x = chartPadding + (i * (graphWidth - chartPadding) / (weeks.length - 1));
                  return (
                    <text key={i} x={x} y={graphHeight + 25} fontSize="14" fill="#aaa" textAnchor="middle">
                      {w}
                    </text>
                  );
                })}
                
                <polyline
                  fill="none"
                  stroke="#00e600"
                  strokeWidth="3"
                  points={points.map(p => p.join(',')).join(' ')}
                />
                
                {points.map(([x, y], i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={6}
                    fill="#fff"
                    stroke="#00e600"
                    strokeWidth="3"
                  />
                ))}
                
                <g>
                  <line x1={tooltipX} y1={tooltipY} x2={tooltipX} y2={graphHeight} stroke="#aaa" strokeDasharray="4" />
                  <rect x={tooltipX - 32} y={tooltipY - 48} width="64" height="32" rx="8" fill="#222" opacity="0.95" />
                  <text x={tooltipX} y={tooltipY - 32} fill="#fff" fontSize="14" textAnchor="middle" fontWeight="bold">
                    Chats
                  </text>
                  <text x={tooltipX} y={tooltipY - 16} fill="#fff" fontSize="16" textAnchor="middle" fontWeight="bold">
                    {missedChats[tooltipIndex]}
                  </text>
                </g>
              </svg>
            </div>
          </div>

          <div className="analytics-section">
            <div className="metric-content">
              <h3>Average Reply time</h3>
              <div className="metric-container">
                <p className="metric-text">
                  For highest customer satisfaction rates you should aim to reply to an incoming customer's message in 15 seconds or less. Quick responses will get you more conversations, help you earn customers trust and make more sales.
                </p>
                <div className="metric-value">{avgReplyTime} secs</div>
              </div>
            </div>
          </div>

          <div className="analytics-section">
            <div className="metric-content">
              <h3>Resolved Tickets</h3>
              <div className="metric-container">
                <p className="metric-text">
                  A callback system on a website, as well as proactive invitations, help to attract even more customers. A separate round button for ordering a call with a small animation helps to motivate more customers to make calls.
                </p>
                <div className="metric-value">
                  <svg width="80" height="80">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="6"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="#00e600"
                      strokeWidth="6"
                      strokeDasharray={`${2 * Math.PI * 33}`}
                      strokeDashoffset={`${2 * Math.PI * 33 * (1 - resolvedPercent/100)}`}
                      transform="rotate(-90 40 40)"
                      strokeLinecap="round"
                    />
                    <text
                      x="40"
                      y="46"
                      textAnchor="middle"
                      fontSize="18"
                      fill="#222"
                      fontWeight="bold"
                    >
                      {resolvedPercent}%
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="analytics-section">
            <div className="metric-content">
              <h3>Total Chats</h3>
              <div className="metric-container">
                <p className="metric-text">
                  This metric Shows the total number of chats for all Channels for the selected the selected period
                </p>
                <div className="metric-value">{totalChats} Chats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}