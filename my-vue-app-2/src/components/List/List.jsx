
export default function List({products, setList}) {
  function removeItemList() {
    
  }
  return (
    <div>
        {products.map((producto, index) => (
        <>
      <li key={index}>{producto.label}
        <button onClick={() => setList("changed text")}>
          Click here to change text
        </button>
      </li>
      </>
      ))}
      
    </div>
  );
}
