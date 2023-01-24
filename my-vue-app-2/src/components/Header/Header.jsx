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
          <div className="d-inline-flex align-items-center">
            {menuItemsRight.map((menuItem, index) => (
              <button type="button" className="btn m-2 btn-light" key={index}>
                <Link className="text-decoration-none" to={menuItem.path}>
                  <span className="text-dark">{menuItem.label}</span>
                </Link>
              </button>
            ))}
          </div>
        
      </div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid justify-content-center">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-light" type="submit">Search</button>
    </form>
  </div>
</nav>
    </header>
  );
}
