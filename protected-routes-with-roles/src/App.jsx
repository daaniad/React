import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Products from "./views/Products/Products";
import Layout from "./components/Layout/Layout";
import Login from "./views/Login/Login";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Unauthorized from "./views/Unauthorized/Unauthorized";
import { ROLES } from "./const/roles";
import { HOME, PRODUCTS, ABOUT, LOGIN, UNAUTHORIZED } from "./const/routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={HOME} element={<Home />} />
        <Route path={UNAUTHORIZED} element={<Unauthorized />} />
        {/* Rutas publicas */}

        <Route element={<PublicRoute />}>
          <Route path={LOGIN} element={<Login />} />
        </Route>

        {/* Rutas privadas */}
        <Route
          element={
            <PrivateRoute allowedRoles={[ROLES.Admin, ROLES.SuperAdmin]} />
          }
        >
          <Route path={PRODUCTS} element={<Products />} />
        </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
          <Route path={ABOUT} element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
