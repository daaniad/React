import fetch from "../../components/customFetch/customFetch";
import { Link, useParams } from "react-router-dom";
export default function ProductDetails() {
    const params = useParams();
  const { response, error } = fetch(`http://localhost:3000/product/${params.id}`);
  console.log(response);
  return (
    <>
      <h1 className="text-white">Esto es el detalle</h1>

      <div className="d-flex">
        {response && (
          <div className="card" style={{ width: "18rem" }} key={response.id}>
            <img
              src={`http://127.0.0.1:3000/${response.path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{response.nombre}</h5>
              <p className="card-text">{response.descripcion}</p>
              <Link to={`${response.idproducto}`} className="btn btn-primary">
                Details
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
