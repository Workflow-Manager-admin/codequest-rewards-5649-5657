import React from 'react';
import { FaUsers, FaStar, FaBug, FaCodeBranch } from 'react-icons/fa';
import { generateMockUsers } from '../../utils/mockData';

// PUBLIC_INTERFACE
/**
 * TeamMembers component that displays team member information
 */
const TeamMembers = () => {
  // Get mock team members data
  const teamMembers = generateMockUsers();
  
  return (
    <div>
      <h1>Team Members</h1>
      <p className="description">
        View team member contributions and performance
      </p>
      
      <div className="dashboard-card">
        <div className="card-title">
          <FaUsers style={{ color: 'var(--secondary)' }} /> Active Members
        </div>
        <div className="card-content">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Role</th>
                <th>Score</th>
                <th>Bugs Found</th>
                <th>Projects</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="user-name">{member.name}</div>
                        <div className="user-role">{member.role}</div>
                      </div>
                    </div>
                  </td>
                  <td>{member.role}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {member.score}
                      <FaStar style={{ color: 'var(--secondary)' }} />
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {member.bugsFound}
                      <FaBug style={{ color: 'var(--danger)' }} />
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {member.projects}
                      <FaCodeBranch style={{ color: 'var(--info)' }} />
                    </div>
                  </td>
                  <td>
                    <button className="btn" style={{ padding: '5px 10px', fontSize: '0.9rem' }}>
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button className="btn btn-primary">
          <FaUsers style={{ marginRight: '5px' }} /> Invite New Member
        </button>
        <button className="btn">
          <FaCodeBranch style={{ marginRight: '5px' }} /> Manage Team Roles
        </button>
      </div>
    </div>
  );
};

export default TeamMembers;
