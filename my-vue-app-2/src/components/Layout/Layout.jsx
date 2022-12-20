import { Outlet } from "react-router-dom";
import { Navbar } from "../Header/Navbar";
import { Header } from "../Header/Header";
import "../Header/navbar.css";
import { homeMenu } from "../../const/homeMenu";

export default function Layout() {
  return (
    <>
      <Header />
      <Navbar menuItems={homeMenu} />
      <Outlet />
    </>
  );
}
