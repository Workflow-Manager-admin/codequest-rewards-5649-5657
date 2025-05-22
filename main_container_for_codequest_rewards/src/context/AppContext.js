import React, { createContext, useContext, useState, useCallback } from 'react';

// Create the context
const AppContext = createContext();

// PUBLIC_INTERFACE
/**
 * Custom hook to access the app context
 * @returns {Object} The app context value
 */
export const useAppContext = () => useContext(AppContext);

// PUBLIC_INTERFACE
/**
 * App context provider component
 * @param {Object} props - React props
 * @param {React.ReactNode} props.children - Child components to render
 */
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 'user-1',
    name: 'Current User',
    role: 'Developer',
    score: 425,
    bugsFound: 17,
    validBugs: 12,
    projects: 5
  });

  const [notifications, setNotifications] = useState([]);
  
  // Function to add a new notification
  const addNotification = useCallback((notification) => {
    setNotifications(prev => [notification, ...prev]);
  }, []);
  
  // Function to mark a notification as read
  const markNotificationAsRead = useCallback((notificationId) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true } 
          : notification
      )
    );
  }, []);
  
  // Function to update user score
  const updateUserScore = useCallback((points) => {
    setUser(prev => ({
      ...prev,
      score: prev.score + points
    }));
  }, []);

  // Context value
  const value = {
    user,
    notifications,
    addNotification,
    markNotificationAsRead,
    updateUserScore
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
