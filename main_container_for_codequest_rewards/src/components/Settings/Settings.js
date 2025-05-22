import React from 'react';
import { FaCog, FaBell, FaUser, FaShieldAlt } from 'react-icons/fa';

// PUBLIC_INTERFACE
/**
 * Settings component for user preferences and configuration
 */
const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <p className="description">
        Manage your preferences and notification settings
      </p>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-title">
            <FaUser style={{ color: 'var(--secondary)' }} /> Profile Settings
          </div>
          <div className="card-content">
            <form>
              <div style={{ marginBottom: '15px' }}>
                <label>Display Name</label>
                <input type="text" defaultValue="Current User" 
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    backgroundColor: 'var(--dark)', 
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    color: 'var(--text-color)'
                  }} 
                />
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <label>Email</label>
                <input type="email" defaultValue="user@example.com" 
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    backgroundColor: 'var(--dark)', 
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    color: 'var(--text-color)'
                  }} 
                />
              </div>
              
              <button className="btn">Save Changes</button>
            </form>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="card-title">
            <FaBell style={{ color: 'var(--secondary)' }} /> Notification Preferences
          </div>
          <div className="card-content">
            <div style={{ marginBottom: '10px' }}>
              <input type="checkbox" id="email-notif" defaultChecked />
              <label htmlFor="email-notif" style={{ marginLeft: '8px' }}>Email Notifications</label>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <input type="checkbox" id="slack-notif" defaultChecked />
              <label htmlFor="slack-notif" style={{ marginLeft: '8px' }}>Slack Notifications</label>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <input type="checkbox" id="bug-notif" defaultChecked />
              <label htmlFor="bug-notif" style={{ marginLeft: '8px' }}>Bug Validation Notifications</label>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <input type="checkbox" id="mr-notif" defaultChecked />
              <label htmlFor="mr-notif" style={{ marginLeft: '8px' }}>Merge Request Assignments</label>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <input type="checkbox" id="points-notif" defaultChecked />
              <label htmlFor="points-notif" style={{ marginLeft: '8px' }}>Points and Rewards</label>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="card-title">
            <FaShieldAlt style={{ color: 'var(--secondary)' }} /> Connected Accounts
          </div>
          <div className="card-content">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div>
                <strong>GitHub</strong>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Connected</div>
              </div>
              <button className="btn">Disconnect</button>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div>
                <strong>GitLab</strong>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Not connected</div>
              </div>
              <button className="btn">Connect</button>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px'
            }}>
              <div>
                <strong>Slack</strong>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Connected</div>
              </div>
              <button className="btn">Disconnect</button>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="card-title">
            <FaCog style={{ color: 'var(--secondary)' }} /> Application Settings
          </div>
          <div className="card-content">
            <div style={{ marginBottom: '15px' }}>
              <label>Theme</label>
              <select 
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  backgroundColor: 'var(--dark)', 
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--text-color)'
                }}
              >
                <option value="dark">Dark Theme</option>
                <option value="light">Light Theme</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '10px' }}>
              <label>Language</label>
              <select 
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  backgroundColor: 'var(--dark)', 
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--text-color)'
                }}
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
