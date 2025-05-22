import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Layout components
import MainLayout from './components/Layout/MainLayout';

// Page components
import Dashboard from './components/Dashboard/Dashboard';
import Leaderboard from './components/Leaderboard/Leaderboard';
import ProjectView from './components/ProjectView/ProjectView';
import ReviewTracker from './components/ReviewTracker/ReviewTracker';
import Notifications from './components/Notifications/Notifications';
import Settings from './components/Settings/Settings';
import TeamMembers from './components/TeamMembers/TeamMembers';

// Context providers
import { AppContextProvider } from './context/AppContext';

// PUBLIC_INTERFACE
/**
 * Main application component for CodeQuest Rewards
 * Sets up routing and context providers
 */
function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/projects" element={<ProjectView />} />
            <Route path="/bug-validation" element={<ReviewTracker />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/team" element={<TeamMembers />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
