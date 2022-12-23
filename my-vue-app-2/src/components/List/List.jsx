
export default function Listed({todoList, onClick}) {
  function removeItemList(id) {
    const newList = todoList.filter(item => item !== id)
    onClick(newList)
  }
  return (
    <div>
        {todoList.map((task) => (
        
      <li key={task.id}>{task.title}
        <button onClick={() => removeItemList(task.id)}>
          X
        </button>
      </li>
    
      
      ))}
      
    </div>
  );
}
