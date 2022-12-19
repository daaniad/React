export function Navbar ({menuItems}) {
    return (
        <nav>
      <div className="container navbar">
        <div className="button nav">
        <ul>
        {menuItems.map((menuItem, index) => (
            <li key={index}><a href="All-products.html" ><span>{menuItem}</span></a></li>
        ))}
        </ul>
        </div>
      </div>
      </nav>
    )
}