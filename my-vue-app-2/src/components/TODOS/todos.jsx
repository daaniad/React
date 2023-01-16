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
        {todoList
          .filter((item) => item.id <= 20)
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
