import { useEffect, useState } from "react";
export default function Products() {
  const [products, setProducts] = useState([]);
 console.log(products);
  useEffect(
    function () {
      async function fetchProduct() {
        const response = await fetch(`http://localhost:3000/product`);
        const details = await response.json();
        setProducts(details);
      }
      fetchProduct();
    },

    []
  );

  return <h3 className="text-white">{products && products[0].nombre}</h3>;
}
