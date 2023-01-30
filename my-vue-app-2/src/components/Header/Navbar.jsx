import { Link } from "react-router-dom";
import {
  ABOUT,
  HERO_ACADEMIA,
  HOME,
  KINGDOM_HEARTS,
  POKEMON,
  PRODUCTS,
} from "../../const/routes";
import {homeMenu} from "../../const/homeMenu"
export function Navbar() {
  return (
    <nav>
      <div className="d-flex justify-content-center">
        <ul className="list-unstyled d-inline-flex bg-white rounded">
          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={HOME}>
              <span>{homeMenu[0]}</span>
            </Link>
          </li>

          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={ABOUT}>
              <span>{homeMenu[1]}</span>
            </Link>
          </li>
          <li className="btn btn-light btn-lg p-2">
            <Link
              className="text-dark text-decoration-none"
              to={KINGDOM_HEARTS}
            >
              <span>{homeMenu[2]}</span>
            </Link>
          </li>
          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={HERO_ACADEMIA}>
              <span>{homeMenu[3]}</span>
            </Link>
          </li>
          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={POKEMON}>
              <span>{homeMenu[4]}</span>
            </Link>
          </li>
          <li className="btn btn-light btn-lg p-2">
            <Link className="text-dark text-decoration-none" to={PRODUCTS}>
              <span>{homeMenu[5]}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
