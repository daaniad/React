import { Outlet } from "react-router-dom";
import { Navbar } from "../Header/Navbar";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { homeMenu } from "../../const/homeMenu";
import { homeMenuRight } from "../../const/homeMenuRight";

export default function Layout() {
  return (
    <>
      <Header menuItemsRight = {homeMenuRight}/>
      <Navbar menuItems={homeMenu} />
      <Outlet />
      <Footer/>
    </>
  );
}
