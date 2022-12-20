import { Link } from "react-router-dom"
import { homeMenu } from "../../const/homeMenu"
export function Navbar ({menuItems}) {
    return (
        <nav>
      <div className="container navbar">
        <div className="button nav">
        <ul>
        {menuItems.map((menuItem, index) => (
            <li key={index}><Link to={menuItem.path} ><span>{menuItem.label}</span></Link></li>
        ))}
        </ul>
        </div>
      </div>
      </nav>
    )
}