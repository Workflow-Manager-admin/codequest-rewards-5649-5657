import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaTrophy, 
  FaCodeBranch, 
  FaBug, 
  FaUsers, 
  FaBell, 
  FaCog 
} from 'react-icons/fa';

// PUBLIC_INTERFACE
/**
 * Sidebar navigation component for the CodeQuest Rewards application
 * Provides links to different sections of the application
 */
const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: <FaHome /> },
    { path: '/leaderboard', label: 'Leaderboard', icon: <FaTrophy /> },
    { path: '/projects', label: 'Projects', icon: <FaCodeBranch /> },
    { path: '/bug-validation', label: 'Bug Validation', icon: <FaBug /> },
    { path: '/team', label: 'Team Members', icon: <FaUsers /> },
    { path: '/notifications', label: 'Notifications', icon: <FaBell /> },
    { path: '/settings', label: 'Settings', icon: <FaCog /> }
  ];
  
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={`sidebar-nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon} {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
