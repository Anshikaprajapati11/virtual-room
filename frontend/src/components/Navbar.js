// Navigation bar component with real-time clock and theme toggle

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();

  // Theme from common ThemeContext
  const { darkMode, toggleTheme } = useTheme();

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Left section - Logo and Clock */}
        <div className="navbar-left">

          <Link to="/" className="navbar-logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">Virtual Room</span>
          </Link>

          <div className="clock-section">
            <div className="current-time">
              {formatTime(currentTime)}
            </div>

            <div className="current-date">
              {formatDate(currentTime)}
            </div>
          </div>

        </div>

        {/* Right section - Navigation */}
        <div className="navbar-right">

          <Link to="/" className="nav-link">
            <span>⌂</span>
            Home
          </Link>

          <Link to="/chatbot" className="nav-link">
            <span>✦</span>
            Chatbot
          </Link>

          <Link to="/profile" className="nav-link">
            <span>◎</span>
            Profile
          </Link>

          <Link to="/setTime" className="nav-link">
            <span>◷</span>
            SetTime
          </Link>

          <Link to="/allnotsh" className="nav-link">
            <span>▤</span>
            All Notes
          </Link>

          <Link to="/about" className="nav-link">
            <span>ⓘ</span>
            About
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            title={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {darkMode ? '☀' : '☾'}
          </button>

          {/* User Name */}
          {user.name && (
            <span className="user-name">
              Hello, {user.name}
            </span>
          )}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="logout-btn"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;