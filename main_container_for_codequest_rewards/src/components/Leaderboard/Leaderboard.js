import React from 'react';
import { FaMedal, FaTrophy, FaCrown } from 'react-icons/fa';

// PUBLIC_INTERFACE
/**
 * Leaderboard component that displays user rankings based on their contributions
 */
const Leaderboard = () => {
  // Mock data for the leaderboard
  const leaderboardData = [
    { id: 1, name: 'Alex Johnson', score: 842, bugsFound: 32, projects: 5 },
    { id: 2, name: 'Sarah Williams', score: 756, bugsFound: 28, projects: 4 },
    { id: 3, name: 'Michael Brown', score: 703, bugsFound: 26, projects: 6 },
    { id: 4, name: 'Jessica Davis', score: 651, bugsFound: 22, projects: 3 },
    { id: 5, name: 'David Miller', score: 612, bugsFound: 20, projects: 4 },
    { id: 6, name: 'Emily Wilson', score: 587, bugsFound: 19, projects: 5 },
    { id: 7, name: 'Robert Taylor', score: 542, bugsFound: 17, projects: 3 },
    { id: 8, name: 'Lisa Anderson', score: 510, bugsFound: 16, projects: 4 },
    { id: 9, name: 'James Thomas', score: 489, bugsFound: 15, projects: 2 },
    { id: 10, name: 'Jennifer Martin', score: 456, bugsFound: 14, projects: 3 },
  ];

  // Function to render rank icon based on position
  const getRankIcon = (position) => {
    switch (position) {
      case 0: // 1st place
        return <FaCrown style={{ color: 'gold', marginRight: '8px' }} />;
      case 1: // 2nd place
        return <FaMedal style={{ color: 'silver', marginRight: '8px' }} />;
      case 2: // 3rd place
        return <FaMedal style={{ color: '#CD7F32', marginRight: '8px' }} />; // Bronze color
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Leaderboard</h1>
      <p className="description">
        Top contributors in bug detection and code quality improvement
      </p>
      
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Bugs Found</th>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={user.id}>
              <td>
                {getRankIcon(index)}
                {index + 1}
              </td>
              <td>{user.name}</td>
              <td>
                <strong>{user.score}</strong>
                <FaTrophy style={{ color: 'var(--secondary)', marginLeft: '8px' }} />
              </td>
              <td>{user.bugsFound}</td>
              <td>{user.projects}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
