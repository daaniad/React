export default function Todos({ todoList, onClick }) {
  function removeItemList(id, e) {
    const newList = todoList.filter((item) => item.id !== id);
    onClick(newList);
    e.stopPropagation();
  }

  function textCrosser(index) {
    const newList = [...todoList];
    newList[index].completed = !newList[index].completed;
    onClick(newList);
  }

  return (
    <div>
      <input></input>
      <ol>
        {todoList.map((task, index) => (
          <li
            onClick={() => textCrosser(index)}
            className="text-white"
            key={task.id}
          >
            <span
              className={`${task.completed && "text-decoration-line-through"} `}
            >
              {task.title}
            </span>
            <button onClick={(e) => removeItemList(task.id, e)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
