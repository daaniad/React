// import reactLogo from './assets/react.svg'
import './App.css'
import {Navbar} from './assets/Header/Navbar'
import { useState } from 'react'
function Likes() {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(likes + 1)}>{likes} likes </button>;
}
const menu = ["All products", "Boku No Hero Academia", "Kingdom Hearts", "About us", "Deals", "My Orders"]


function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div className="App">
      {/* <Header/> */}
      <Navbar menuItems={menu}/>
      {/* <Home/>
      <Footer/> */}
      <Likes/>
    </div>
  )
}

export default App
