import { useState, useEffect } from "react";
import Todos from "../../components/TODOS/todos"
export default function KingdomHearts() {
  const [toDos, setTodo] = useState([]);

  

  useEffect(
    function () {
      async function fetchList() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        const details = await response.json();
        setTodo(details);
      }
      fetchList();
    },
    []
  );
 const showTwenty = toDos.slice(0,20)

  return (
    <>
      <h2 className="text-white">Kingdom Hearts Category</h2>
      <Todos todoList={showTwenty} onClick = {setTodo} />
    </>
  );
}
