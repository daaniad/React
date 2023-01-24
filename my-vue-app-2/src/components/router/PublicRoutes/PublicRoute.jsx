import { Outlet, Navigate } from "react-router-dom";
import { HOME } from "../../../const/routes";
import { useCheckLoginContext } from "../../../contexts/AuthContext/logInContext";
export default function PublicRoute() {
  const { authorization } = useCheckLoginContext();

  if (authorization) {
    return <Navigate to={HOME} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
