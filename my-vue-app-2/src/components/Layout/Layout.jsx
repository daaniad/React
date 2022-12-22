import { Outlet } from "react-router-dom";
import { Navbar } from "../Header/Navbar";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "../Header/navbar.css";
import { homeMenu } from "../../const/homeMenu";

export default function Layout() {
  return (
    <>
      <Header menuItems={homeMenu}/>
      <Navbar menuItems={homeMenu} />
      <Outlet />
      <Footer/>
    </>
  );
}
