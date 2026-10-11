import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Yahan hum check kar rahe hain ke kya browser ke current session mein 'token' maujood hai?
  const isAuthenticated = sessionStorage.getItem('token');

  // Agar user login nahi hai (token nahi hai), toh usay wapas login page par bhej do
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Agar login hai, toh usay Dashboard (ya jo bhi page usne manga hai) dikha do
  return children;
};

export default ProtectedRoute;