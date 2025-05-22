import React from 'react';
import { FaTrophy, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Navigation bar component for the CodeQuest Rewards application
 * Displays the logo, title, and user controls
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="logo">
              <span className="logo-symbol"><FaTrophy /></span> CodeQuest Rewards
            </div>
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div className="notification-bell">
              <FaBell size={20} style={{ cursor: 'pointer' }} />
            </div>
            <div className="user-profile">
              <FaUserCircle size={24} style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
