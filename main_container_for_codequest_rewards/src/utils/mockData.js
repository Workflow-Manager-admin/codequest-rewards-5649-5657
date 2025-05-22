/**
 * Mock data utility functions for development and testing
 * These functions generate fake data for users, projects, reviews, etc.
 */

/**
 * Generates mock user data
 * @returns {Array} Array of user objects
 */
export const generateMockUsers = () => {
  return [
    { id: 'user-1', name: 'Alex Johnson', role: 'Senior Developer', score: 842, bugsFound: 32, projects: 5 },
    { id: 'user-2', name: 'Sarah Williams', role: 'Developer', score: 756, bugsFound: 28, projects: 4 },
    { id: 'user-3', name: 'Michael Brown', role: 'QA Engineer', score: 703, bugsFound: 26, projects: 6 },
    { id: 'user-4', name: 'Jessica Davis', role: 'Developer', score: 651, bugsFound: 22, projects: 3 },
    { id: 'user-5', name: 'David Miller', role: 'DevOps Engineer', score: 612, bugsFound: 20, projects: 4 },
    { id: 'user-6', name: 'Emily Wilson', role: 'Senior Developer', score: 587, bugsFound: 19, projects: 5 },
    { id: 'user-7', name: 'Robert Taylor', role: 'QA Engineer', score: 542, bugsFound: 17, projects: 3 },
    { id: 'user-8', name: 'Lisa Anderson', role: 'Developer', score: 510, bugsFound: 16, projects: 4 },
    { id: 'user-9', name: 'James Thomas', role: 'UI Designer', score: 489, bugsFound: 15, projects: 2 },
    { id: 'user-10', name: 'Jennifer Martin', role: 'Developer', score: 456, bugsFound: 14, projects: 3 }
  ];
};

/**
 * Generates mock project data
 * @returns {Array} Array of project objects
 */
export const generateMockProjects = () => {
  return [
    {
      id: 'project-1',
      name: 'Frontend Dashboard',
      description: 'User interface dashboard for the main application',
      mergeRequests: 8,
      openBugs: 3,
      reviewers: ['user-1', 'user-2', 'user-3', 'user-4']
    },
    {
      id: 'project-2',
      name: 'API Gateway',
      description: 'Central API gateway service for microservices',
      mergeRequests: 5,
      openBugs: 2,
      reviewers: ['user-2', 'user-5', 'user-8']
    },
    {
      id: 'project-3',
      name: 'Authentication Service',
      description: 'User authentication and authorization service',
      mergeRequests: 3,
      openBugs: 1,
      reviewers: ['user-4', 'user-6']
    },
    {
      id: 'project-4',
      name: 'Analytics Engine',
      description: 'Data processing and analytics service',
      mergeRequests: 6,
      openBugs: 4,
      reviewers: ['user-1', 'user-3', 'user-7', 'user-9', 'user-10']
    }
  ];
};

/**
 * Generates mock bug validation data
 * @returns {Array} Array of bug validation objects
 */
export const generateMockBugValidations = () => {
  return [
    {
      id: 'bug-1',
      title: 'Authentication token not refreshing properly',
      description: 'When the session timeout occurs, the app does not properly refresh the auth token.',
      projectId: 'project-3',
      reporterId: 'user-1',
      status: 'validated',
      severity: 'critical',
      date: '2023-09-15',
      points: 25
    },
    {
      id: 'bug-2',
      title: 'Data inconsistency in user dashboard statistics',
      description: 'User statistics on the dashboard are not matching the database values.',
      projectId: 'project-1',
      reporterId: 'user-2',
      status: 'pending',
      severity: 'major',
      date: '2023-09-17',
      points: 20
    },
    {
      id: 'bug-3',
      title: 'API rate limiting not working as expected',
      description: 'The rate limiting middleware is not properly throttling requests as configured.',
      projectId: 'project-2',
      reporterId: 'user-3',
      status: 'rejected',
      severity: 'minor',
      date: '2023-09-14',
      points: 15
    },
    {
      id: 'bug-4',
      title: 'Memory leak in data processing pipeline',
      description: 'The analytics processing job is not properly releasing memory after completion.',
      projectId: 'project-4',
      reporterId: 'user-4',
      status: 'validated',
      severity: 'critical',
      date: '2023-09-16',
      points: 30
    },
    {
      id: 'bug-5',
      title: 'Incorrect error handling in edge cases',
      description: 'API errors are not being properly handled when specific edge conditions are met.',
      projectId: 'project-2',
      reporterId: 'user-5',
      status: 'pending',
      severity: 'minor',
      date: '2023-09-18',
      points: 10
    }
  ];
};

/**
 * Generates mock notification data
 * @returns {Array} Array of notification objects
 */
export const generateMockNotifications = () => {
  return [
    {
      id: 'notif-1',
      type: 'bug_validated',
      title: 'Bug Validated',
      message: 'Your bug report "Authentication token not refreshing properly" has been validated.',
      date: '2023-09-16T14:30:00',
      read: false
    },
    {
      id: 'notif-2',
      type: 'points_awarded',
      title: 'Points Awarded',
      message: 'You received 25 points for validating a critical bug.',
      date: '2023-09-16T13:45:00',
      read: false
    },
    {
      id: 'notif-3',
      type: 'new_merge_request',
      title: 'New Merge Request',
      message: 'You\'ve been assigned to review "Update Authentication Flow" in API Gateway.',
      date: '2023-09-15T10:20:00',
      read: true
    },
    {
      id: 'notif-4',
      type: 'team_invitation',
      title: 'Team Invitation',
      message: 'You\'ve been invited to join the Frontend Dashboard project.',
      date: '2023-09-14T16:15:00',
      read: true
    },
    {
      id: 'notif-5',
      type: 'leaderboard_position',
      title: 'Leaderboard Update',
      message: 'Congratulations! You\'ve moved up to position #3 on the leaderboard.',
      date: '2023-09-13T09:10:00',
      read: true
    }
  ];
};
