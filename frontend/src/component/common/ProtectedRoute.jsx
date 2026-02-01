import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  const location = useLocation();

  // 1. Authenticated Check: If not logged in, send to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. Role Check: If role isn't in the allowed list, send to unauthorized
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};


export default ProtectedRoute