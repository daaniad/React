import { useState, useEffect } from "react";
import Todos from "../../components/TODOS/todos"
export default function KingdomHearts() {
  const [toDos, setTodo] = useState([]);
  const [crossOut, setCrossOut] = (toDos);
  const [newTask, setNewTask] = useState("");


  function addNewTask(e) {
    setNewTask(e.target.value)
  }

  function addTaskToList(e) {
    e.preventDefault();
    const newToDo = {
      id: toDos.length + 1,
      title: newTask,
      completed: false,
      userId: 1
    }
    setTodo([newToDo, ...toDos]);
    setNewTask("")
  }


  useEffect(
    function () {
      async function fetchList() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        const details = await response.json();
        setTodo(details.slice(0,20));
      }
      fetchList();
    },
    []
  );
 

  return (
    <>
      <form onSubmit={addTaskToList}>
        <input value={newTask} onChange={addNewTask}/>
        <button>Add Task</button>
      </form>
      <h2 className="text-white">Kingdom Hearts Category</h2>
      <Todos todoList={toDos} onClick = {setTodo} />
    </>
  );
}
