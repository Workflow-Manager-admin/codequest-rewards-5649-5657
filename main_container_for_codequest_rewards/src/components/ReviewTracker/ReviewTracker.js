import React from 'react';
import { FaBug, FaCheck, FaTimes, FaClock } from 'react-icons/fa';

// PUBLIC_INTERFACE
/**
 * ReviewTracker component that displays bug validation status
 */
const ReviewTracker = () => {
  // Mock data for bug validations
  const bugValidations = [
    {
      id: 1,
      title: 'Authentication token not refreshing properly',
      project: 'Authentication Service',
      status: 'validated',
      reporter: 'Alex Johnson',
      date: '2023-09-15',
      points: 25
    },
    {
      id: 2,
      title: 'Data inconsistency in user dashboard statistics',
      project: 'Frontend Dashboard',
      status: 'pending',
      reporter: 'Sarah Williams',
      date: '2023-09-17',
      points: 20
    },
    {
      id: 3,
      title: 'API rate limiting not working as expected',
      project: 'API Gateway',
      status: 'rejected',
      reporter: 'Michael Brown',
      date: '2023-09-14',
      points: 15
    },
    {
      id: 4,
      title: 'Memory leak in data processing pipeline',
      project: 'Analytics Engine',
      status: 'validated',
      reporter: 'Jessica Davis',
      date: '2023-09-16',
      points: 30
    },
    {
      id: 5,
      title: 'Incorrect error handling in edge cases',
      project: 'API Gateway',
      status: 'pending',
      reporter: 'David Miller',
      date: '2023-09-18',
      points: 10
    }
  ];

  // Function to render status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'validated':
        return <FaCheck style={{ color: 'var(--success)' }} />;
      case 'rejected':
        return <FaTimes style={{ color: 'var(--danger)' }} />;
      case 'pending':
        return <FaClock style={{ color: 'var(--warning)' }} />;
      default:
        return null;
    }
  };

  // Function to get badge class based on status
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'validated':
        return 'badge badge-success';
      case 'rejected':
        return 'badge badge-danger';
      case 'pending':
        return 'badge badge-warning';
      default:
        return 'badge';
    }
  };

  return (
    <div>
      <h1>Bug Validation</h1>
      <p className="description">
        Track and validate bugs found during code reviews
      </p>
      
      <div className="dashboard-card">
        <div className="card-title">
          <FaBug style={{ color: 'var(--danger)' }} /> Recent Bug Reports
        </div>
        <div className="card-content">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Bug</th>
                <th>Project</th>
                <th>Reporter</th>
                <th>Date</th>
                <th>Status</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {bugValidations.map((bug) => (
                <tr key={bug.id}>
                  <td>{bug.title}</td>
                  <td>{bug.project}</td>
                  <td>{bug.reporter}</td>
                  <td>{bug.date}</td>
                  <td>
                    <span className={getStatusBadgeClass(bug.status)}>
                      {getStatusIcon(bug.status)} {bug.status}
                    </span>
                  </td>
                  <td>{bug.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewTracker;
