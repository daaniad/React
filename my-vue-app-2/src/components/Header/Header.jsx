import logo from "@/assets/imagenes/POP/Sora_logo-removebg.png";
import { Link } from "react-router-dom";
import { CART, LOGIN } from "../../const/routes";
import { useCheckLoginContext } from "../../contexts/AuthContext/logInContext";
export function Header() {
  const { logout, authorization } = useCheckLoginContext();
  return (
    <header>
      <div className="d-flex justify-content-between text-white bg-dark">
        <div className="">
          <img height={60} src={logo} />
        </div>
        <div className="">
          <h1 className="">House of POP</h1>
        </div>
        <div className="d-inline-flex align-items-center">
          <button type="button" className="btn m-2 btn-light">
            <Link className="text-decoration-none" to={CART}>
              <span className="text-dark">Cart</span>
            </Link>
          </button>

          {authorization.email ? (
            <>
            <button
              type="button"
              onClick={logout}
              className="btn m-2 btn-light"
            >
              <span className="text-dark">Logout</span>
            </button>
            <div>
              <h3>{authorization.nombre}</h3>
            </div>
            </>
          ) : (
            <li className="btn m-2 btn-light">
              <Link className="text-dark text-decoration-none" to={LOGIN}>
                <span>Login</span>
              </Link>
            </li>
          )}
        </div>
      </div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-center">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
