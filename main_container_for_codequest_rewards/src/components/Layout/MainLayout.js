import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

// PUBLIC_INTERFACE
/**
 * Main layout component that wraps all pages with the Navbar and Sidebar
 * @param {Object} props - React props
 * @param {React.ReactNode} props.children - Child components to render in the main content area
 */
const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <main className="main-content">
          <div className="content-wrapper">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
