import Carousel from "../../components/Carousel/Carousel";
import { useCheckLoginContext } from "../../contexts/AuthContext/logInContext";

export default function Home() {
  const { logout, authorization } = useCheckLoginContext();
  console.log(authorization);
  return (
    <>
      <h2 className="text-white">Esto es la home</h2>
      <button className="btn btn-primary">hola</button>
      {authorization.email && <button onClick={logout}>Logout</button>}
      <Carousel />
    </>
  );
}
