import React from 'react';
import { FaCodeBranch, FaExclamationTriangle, FaCheckCircle, FaUsers } from 'react-icons/fa';

// PUBLIC_INTERFACE
/**
 * ProjectView component that displays information about projects and merge requests
 */
const ProjectView = () => {
  // Mock data for projects
  const projects = [
    {
      id: 1,
      name: 'Frontend Dashboard',
      description: 'User interface dashboard for the main application',
      mergeRequests: 8,
      openBugs: 3,
      reviewers: 4
    },
    {
      id: 2,
      name: 'API Gateway',
      description: 'Central API gateway service for microservices',
      mergeRequests: 5,
      openBugs: 2,
      reviewers: 3
    },
    {
      id: 3,
      name: 'Authentication Service',
      description: 'User authentication and authorization service',
      mergeRequests: 3,
      openBugs: 1,
      reviewers: 2
    },
    {
      id: 4,
      name: 'Analytics Engine',
      description: 'Data processing and analytics service',
      mergeRequests: 6,
      openBugs: 4,
      reviewers: 5
    }
  ];

  return (
    <div>
      <h1>Projects</h1>
      <p className="description">
        View and manage projects for code review and bug validation
      </p>
      
      <div className="dashboard-grid">
        {projects.map(project => (
          <div className="dashboard-card" key={project.id}>
            <div className="card-title">
              <FaCodeBranch style={{ color: 'var(--secondary)' }} /> {project.name}
            </div>
            <div className="card-content">
              <p>{project.description}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                <div>
                  <FaCheckCircle style={{ color: 'var(--accent)' }} /> {project.mergeRequests} MRs
                </div>
                <div>
                  <FaExclamationTriangle style={{ color: 'var(--warning)' }} /> {project.openBugs} bugs
                </div>
                <div>
                  <FaUsers style={{ color: 'var(--info)' }} /> {project.reviewers} reviewers
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectView;
