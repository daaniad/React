export function Navbar ({menuItems}) {
    return (
        <nav>
      <div className="container navbar">
        <div className="button nav">
        <ul>
        {menuItems.map((menuItem, index) => (
            <li><a href="All-products.html" key={index}><span>{menuItem}</span></a></li>
        ))}
        </ul>
        </div>
      </div>
      </nav>
    )
}