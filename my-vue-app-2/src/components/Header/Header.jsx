import logo from "@/assets/imagenes/POP/Sora_logo-removebg.png";
import { Link } from "react-router-dom";
export function Header({ menuItemsRight }) {
  return (
    <header>
      <div className="d-flex justify-content-between text-white bg-dark">
        <div className="">
          <img height={60} src={logo}/>
        </div>
        <div className="">
          <h1 className="">House of POP</h1>
        </div>
        <div className="">
          <div className="d-inline-flex">
            {menuItemsRight.map((menuItem, index) => (
              <button type="button" className="btn btn-light" key={index}>
                <Link className="text-decoration-none" to={menuItem.path}>
                  <span className="text-dark">{menuItem.label}</span>
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="input-grp">
          <input
            className=""
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
}
