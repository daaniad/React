export default function Todos({ todoList, onClick }) {
  function removeItemList(id) {
    const newList = todoList.filter((item) => item.id !== id);
    onClick(newList);
  }
  return (
    <div>
      <ol>
        {todoList
          .filter((item) => item.id < 21)
          .map((task) => (
            <li className="text-white" key={task.id}>
              <button>{task.title}</button>
              <button onClick={() => removeItemList(task.id)}>X</button>
            </li>
          ))}
      </ol>
    </div>
  );
}
