import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, roles, ...rest }) => {
  const { user } = useAuth();
  const userHasRole = roles ? roles.includes(user?.role) : true;

  return (
    <Route
      {...rest}
      element={user && userHasRole ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
