export function Header (logo) {
    return (
    <header>
      <div className="container upper">
        <div className="title">
          <h1>House of POP</h1>
        </div>
      </div>
      <div className="container header-inner">
        <div className="logos">
          <a href="proyecto-de-verdad.html">
            <img src={logo}/>
          </a>
        </div>
        
        
        <div className="input-grp">
          <input className="searchbar" type="search" name="search" id="search" placeholder="Search..." />
        </div>
        <div className="buttons">
        <div className="button basket">
          <a href="#">Basket<span id = "basketNumber" className="number">0</span></a>
        </div>
        <div className="button logout">
          <a href="#"><span>Logout</span></a>
        </div>
      </div>
      </div>
      </header>
    
    )
}