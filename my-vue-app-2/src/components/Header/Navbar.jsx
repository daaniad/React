import { Link } from "react-router-dom"
export function Navbar ({menuItems}) {
    return (
        <nav>
      <div className="d-flex justify-content-center">

        <ul className="list-unstyled d-inline-flex bg-white rounded">
        {menuItems.map((menuItem, index) => (
            <li className="btn btn-light btn-lg p-2" key={index}><Link className="text-dark text-decoration-none" to={menuItem.path} ><span>{menuItem.label}</span></Link></li>
        ))}
        </ul>
        
      </div>
      
      </nav>
    )
}