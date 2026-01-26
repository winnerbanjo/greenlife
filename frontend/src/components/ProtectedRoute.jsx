import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Token exists, allow access (backend will validate on API calls)
  return children;
};

export default ProtectedRoute;
