import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }) => {
  const { data } = useSelector(state => state.user);
  if (data) return children;
  if (data === null) return <Navigate to="/login" />;
  return null;
};
