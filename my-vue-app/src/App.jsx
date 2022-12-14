// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './assets/Header/header'
const menu = ["All products", "Boku No Hero Academia", "Kingdom Hearts", "About us", "Deals", "My Orders"]


function App() {

  return (
    <div className="App">
      {/* <Header/> */}
      <Navbar menuItems={menu}/>
      {/* <Home/>
      <Footer/> */}
    </div>
  )
}

export default App
