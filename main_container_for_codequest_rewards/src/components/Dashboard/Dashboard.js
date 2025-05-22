import React from 'react';
import { FaTrophy, FaBug, FaCodeBranch, FaUsers } from 'react-icons/fa';

// PUBLIC_INTERFACE
/**
 * Dashboard component that displays overview statistics and metrics
 */
const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to CodeQuest Rewards</h1>
      <p className="description">
        Track and reward bug detection in code reviews across organizational projects.
      </p>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-title">
            <FaTrophy style={{ color: 'var(--accent)' }} /> Your Score
          </div>
          <div className="card-content">
            <h2>425 points</h2>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '70%' }}></div>
            </div>
            <p>75 points until next level</p>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="card-title">
            <FaBug style={{ color: 'var(--danger)' }} /> Bugs Found
          </div>
          <div className="card-content">
            <h2>17</h2>
            <p>Last bug found 2 days ago</p>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="card-title">
            <FaCodeBranch style={{ color: 'var(--secondary)' }} /> Active Projects
          </div>
          <div className="card-content">
            <h2>5</h2>
            <p>3 MRs awaiting your review</p>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="card-title">
            <FaUsers style={{ color: 'var(--info)' }} /> Team Ranking
          </div>
          <div className="card-content">
            <h2>#3</h2>
            <p>Top 10% of reviewers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
