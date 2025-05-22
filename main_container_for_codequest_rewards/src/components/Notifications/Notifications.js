import React from 'react';
import { FaBell, FaBug, FaTrophy, FaCodeBranch, FaUserPlus } from 'react-icons/fa';

// PUBLIC_INTERFACE
/**
 * Notifications component that displays user notifications
 */
const Notifications = () => {
  // Mock data for notifications
  const notifications = [
    {
      id: 1,
      type: 'bug_validated',
      title: 'Bug Validated',
      message: 'Your bug report "Authentication token not refreshing properly" has been validated.',
      date: '2023-09-16T14:30:00',
      read: false
    },
    {
      id: 2,
      type: 'points_awarded',
      title: 'Points Awarded',
      message: 'You received 25 points for validating a critical bug.',
      date: '2023-09-16T13:45:00',
      read: false
    },
    {
      id: 3,
      type: 'new_merge_request',
      title: 'New Merge Request',
      message: 'You\'ve been assigned to review "Update Authentication Flow" in API Gateway.',
      date: '2023-09-15T10:20:00',
      read: true
    },
    {
      id: 4,
      type: 'team_invitation',
      title: 'Team Invitation',
      message: 'You\'ve been invited to join the Frontend Dashboard project.',
      date: '2023-09-14T16:15:00',
      read: true
    },
    {
      id: 5,
      type: 'leaderboard_position',
      title: 'Leaderboard Update',
      message: 'Congratulations! You\'ve moved up to position #3 on the leaderboard.',
      date: '2023-09-13T09:10:00',
      read: true
    }
  ];

  // Function to get notification icon based on type
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'bug_validated':
        return <FaBug style={{ color: 'var(--success)' }} />;
      case 'points_awarded':
        return <FaTrophy style={{ color: 'var(--secondary)' }} />;
      case 'new_merge_request':
        return <FaCodeBranch style={{ color: 'var(--info)' }} />;
      case 'team_invitation':
        return <FaUserPlus style={{ color: 'var(--accent)' }} />;
      case 'leaderboard_position':
        return <FaTrophy style={{ color: 'var(--warning)' }} />;
      default:
        return <FaBell style={{ color: 'var(--secondary)' }} />;
    }
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div>
      <h1>Notifications</h1>
      <p className="description">
        Stay updated with your code review activities and rewards
      </p>
      
      <div className="dashboard-card">
        <div className="card-title">
          <FaBell style={{ color: 'var(--secondary)' }} /> Recent Notifications
        </div>
        <div className="card-content">
          <ul className="notification-list">
            {notifications.map((notification) => (
              <li 
                key={notification.id} 
                className="notification-item"
                style={{ backgroundColor: notification.read ? 'transparent' : 'rgba(52, 152, 219, 0.1)' }}
              >
                <div className="notification-icon">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="notification-content">
                  <div className="notification-title">{notification.title}</div>
                  <div>{notification.message}</div>
                  <div className="notification-meta">
                    {formatDate(notification.date)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
