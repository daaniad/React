export default function Title({ setTitle }) {
    return (
  <button onClick={() => setTitle("changed text")}>
    Click here to change text
  </button>
    )
}
