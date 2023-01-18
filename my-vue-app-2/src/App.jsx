// import reactLogo from './assets/react.svg'
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Cart from "./views/Cart/Cart";
import About from "./views/About/About";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Layout from "./components/Layout";
import KingdomHearts from "./views/KingdonHearts/KingdomHearts";
import MyHeroAcademia from "./views/My_Hero_Academia/MyHeroAcademia";
import Pokemon from "./views/Pokemon/Pokemon";
import { LogInContextProvider } from "./contexts/logInContext";


function App() {
  return (
    <LogInContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="Kingdom-hearts" element={<KingdomHearts/>}/>
          <Route path="My-hero-academia" element={<MyHeroAcademia/>}/>
          <Route path="Pokemon" element={<Pokemon/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </LogInContextProvider>
  );
}

export default App;