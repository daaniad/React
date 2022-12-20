// import reactLogo from './assets/react.svg'
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import "./assets/Imagenes/Sora_logo-removebg.png";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Cart from "./views/Cart/Cart";
import About from "./views/About/About";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;