// import reactLogo from './assets/react.svg'
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
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
import { ROLES } from "./const/roles";
import {
  HOME,
  LOGIN,
  ABOUT,
  CART,
  KINGDOM_HEARTS,
  HERO_ACADEMIA,
  POKEMON,
} from "./const/routes";
import PublicRoute from "./components/router/PublicRoutes/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute/PrivateRoute";
import Unauthorized from "./views/Unauthorized/Unauthorized";

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route element={<PublicRoute />}>
          <Route path={LOGIN} element={<Login />} />
        </Route>
        <Route element={<PrivateRoute allowedRoles={ROLES.allUsers} />}>
          <Route path={CART} element={<Cart />} />
        </Route>
        <Route
          element={
            <PrivateRoute allowedRoles={[ROLES.Admin, ROLES.SuperAdmin]} />
          }
        >
          <Route path={ABOUT} element={<About />} />
        </Route>
        <Route path={KINGDOM_HEARTS} element={<KingdomHearts />} />
        <Route path={HERO_ACADEMIA} element={<MyHeroAcademia />} />
        <Route path={POKEMON} element={<Pokemon />} />
      </Route>
    </Routes>
  );
}

export default App;
