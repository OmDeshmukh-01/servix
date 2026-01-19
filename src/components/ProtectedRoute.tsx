import { useEffect, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '@/services/api';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: ('user' | 'provider')[];
  redirectTo?: string;
}

export const ProtectedRoute = ({ 
  children, 
  allowedRoles = [], 
  redirectTo = '/login' 
}) => {
  const location = useLocation();
  
  const isAuth = isAuthenticated();
  const userRole = getUserRole();

  useEffect(() => {
    // If not authenticated, redirect to login
    if (!isAuth) {
      return;
    }

    // If user is authenticated but doesn't have required role
    if (allowedRoles.length > 0 && userRole && !allowedRoles.includes(userRole)) {
      return;
    }
  }, [isAuth, userRole, allowedRoles]);

  // Not authenticated - redirect to login
  if (!isAuth) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Authenticated but role not allowed
  if (allowedRoles.length > 0 && userRole && !allowedRoles.includes(userRole)) {
    // Redirect based on user role
    if (userRole === 'user') {
      return <Navigate to="/" replace />;
    } else if (userRole === 'provider') {
      return <Navigate to="/dashboard" replace />;
    }
    return <Navigate to="/" replace />;
  }

  // All good - render children
  return <>{children}</>;
};

export default ProtectedRoute;
