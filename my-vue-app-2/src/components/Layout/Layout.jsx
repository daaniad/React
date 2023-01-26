import { Outlet } from "react-router-dom";
import { Navbar } from "../Header/Navbar";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header/>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
