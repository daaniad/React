import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { ROLES } from "../../const/roles";
import { HOME, PRODUCTS, ABOUT, LOGIN } from "../../const/routes";

export default function Header() {
  const { auth, logout } = useAuthContext();
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark position-absolute fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/${HOME}`}>
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={`/${HOME}`}>
                Home
              </Link>
            </li>
            {auth.role === ROLES.User && (
              <li className="nav-item">
                <Link className="nav-link" to={`/${ABOUT}`}>
                  About
                </Link>
              </li>
            )}
            {(auth.role === ROLES.Admin || auth?.role === ROLES.SuperAdmin) && (
              <li className="nav-item">
                <Link className="nav-link" to={`/${PRODUCTS}`}>
                  Products
                </Link>
              </li>
            )}
            {!auth.email && (
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={`/${LOGIN}`}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        {auth.email && (
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
