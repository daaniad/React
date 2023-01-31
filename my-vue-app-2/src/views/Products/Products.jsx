import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import customFetch from "../../components/customFetch/customFetch"
export default function Products() {

  const { response, error } = customFetch("http://localhost:3000/product");

  return (
    <div className="d-flex">
   {response?.map((product, index) =>(
    <div className="card" style={{width: '18rem'}} key={index}>
    <img src={`http://127.0.0.1:3000/${product.path}`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.nombre}</h5>
      <p className="card-text">{product.descripcion}</p>
      <Link to={`${product.idproducto}`} className="btn btn-primary">Details</Link>
    </div>
  </div>
    
   )
   )}
    </div>
  )
}
