import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust path if necessary

const PrivateRoute = ({ children, requireRole }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    
  }, [user, navigate, requireRole]); // Dependencies: re-run effect if user, navigate, or requireRole changes

  
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;