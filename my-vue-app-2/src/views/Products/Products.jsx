import { useEffect, useState } from "react";
import { HOME } from "../../const/routes";
import {Link} from "react-router-dom"
import customFetch from "../../components/customFetch/customFetch"
export default function Products() {

  const { response, error } = customFetch("http://localhost:3000/product");

  return (
    <div className="d-flex">
   {response?.map((product, index) =>(
    <div className="card" style={{width: '18rem'}} key={index}>
    <img src={`http://127.0.0.1:8080/app${product.path}`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.nombre}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to={HOME} className="btn btn-primary">Go somewhere</Link>
    </div>
  </div>
    
   )
   )}
    </div>
  )
}
