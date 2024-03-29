import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function PrivateRoute({ allowedRoles }) {
  const { auth } = useAuthContext();
  const location = useLocation();

  return allowedRoles?.includes(auth.role) ? (
    <Outlet />
  ) : auth?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
