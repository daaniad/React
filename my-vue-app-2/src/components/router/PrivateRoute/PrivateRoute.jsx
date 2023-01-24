import { Outlet, Navigate } from "react-router-dom";
import { LOGIN } from "../../../const/routes";
import { useCheckLoginContext } from "../../../contexts/AuthContext/logInContext";
export default function PrivateRoute() {
  const { authorization } = useCheckLoginContext();

  if (!authorization) {
    return <Navigate to={LOGIN} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
