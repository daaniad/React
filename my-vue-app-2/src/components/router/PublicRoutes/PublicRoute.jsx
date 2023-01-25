import { Outlet, Navigate, useLocation} from "react-router-dom";
import { HOME } from "../../../const/routes";
import { useCheckLoginContext } from "../../../contexts/AuthContext/logInContext";
export default function PublicRoute() {
  const { authorization } = useCheckLoginContext();
  const location = useLocation();

  if (authorization.email) {
    return <Navigate to={HOME} state={{from: location}} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
