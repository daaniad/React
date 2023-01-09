import { useState } from "react";
import Title from "../../components/Title";
import Listed from "@/components/List/List"
import { todoList } from "@/const/todoList";

export default function About() {

  const [title, setTitle] = useState("About");
  const [list, setList] = useState(todoList);

  return (
      <div>
        <h2 className="text-white">Esto es el {title}</h2>
        <Title setTitle={setTitle} />
        <Listed todoList={list} onClick = {setList} />
      </div>
  );
}
