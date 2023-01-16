import { useState, useEffect } from "react";
import Todos from "../../components/TODOS/todos"
export default function KingdomHearts() {
  const [toDos, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskToAdd, setTaskToAdd] = useState([])

  function addNewTask(e) {
    setNewTask(e.target.value)
  }

  function addTaskToList(e) {
    e.preventDefault()
    setTaskToAdd([...taskToAdd, newTask]);
    setNewTask("")
  }
  

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
 

  return (
    <>
      <form onSubmit={addTaskToList}>
        <input value={newTask} onChange={addNewTask}/>
        <button>Add Task</button>
      </form>
      <ul>
        {taskToAdd.length === 0 ? (
          <h3 className="text-white">No tasks to show</h3>
         ) : (
          taskToAdd.map((tasks) => <li className="text-white" key={tasks}>{tasks}</li>)
         )}
      </ul>
      <h2 className="text-white">Kingdom Hearts Category</h2>
      <Todos todoList={toDos} onClick = {setTodo} />
    </>
  );
}
