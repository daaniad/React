import { useState } from "react";
import Title from "../../components/Title";
import List from "@/components/List/List"
import { products } from "@/const/products";

export default function About() {

  const [title, setTitle] = useState("About");
  const [list, setList] = useState(products);

  return (
      <div>
        <h2>Esto es el {title}</h2>
        <Title setTitle={setTitle} />
        <List products={list} />
      </div>
  );
}
