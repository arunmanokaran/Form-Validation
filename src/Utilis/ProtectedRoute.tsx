import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Utilis/AuthProvider"; // Adjust the path as needed

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;