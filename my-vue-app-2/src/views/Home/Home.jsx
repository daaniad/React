import Carousel from "../../components/Carousel/Carousel";
import { useCheckLoginContext } from "../../contexts/AuthContext/logInContext";

export default function Home() {
  const {authorization } = useCheckLoginContext();
  console.log(authorization);
  return (
    <>
      <h2 className="text-white">Esto es la home</h2>
      <Carousel />
    </>
  );
}
