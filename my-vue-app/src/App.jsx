// import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Router, Route, Outlet, Link, useParams, useNavigate} from 'react-router-dom'
import './navbar.css'
import './assets/Imagenes/Sora_logo-removebg.png'
import { Header } from './assets/Header/Header'
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
      <Header logo/>
      <Navbar menuItems={menu}/>
      {/* <Home/>
      <Footer/> */}
      <Likes/>
    </div>
  )
}

export default App

/*export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />}>
            <Route index element={<UserIndex />} />
            <Route path=":id" element={<User />} />
            <Route path="new" element={<UserForm />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <h1>
        <span role="img" aria-label="heart">
          💛
        </span>
        Releevant
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <button>
        {" "}
        <Link to="/dashboard">Dashboard</Link>
      </button>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Outlet />
    </div>
  );
}

function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>User: {id}</h2>
      <Link to="../">Atrás</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

function UserIndex() {
  return (
    <div>
      <ul>
        <li>
          <Link to="123">User 123</Link>
        </li>
        <li>
          <Link to="new">Nuevo</Link>
        </li>
      </ul>
    </div>
  );
}

function UserForm() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Form</h2>
      <button onClick={() => navigate("/users")}>Enviar</button>
      <Link to="/about">About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <Link to="/users/890">User 890</Link>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}*/
