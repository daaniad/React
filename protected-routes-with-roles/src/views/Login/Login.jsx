import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function Login() {
  const { login } = useAuthContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={(e) => login(e, user)}
        className="d-flex justify-content-center flex-column m-5"
      >
        <input
          type="email"
          value={user.email}
          onChange={handleInput}
          placeholder="Introduce email"
          name="email"
          className="form-control mb-3"
        />
        <input
          type="password"
          value={user.password}
          onChange={handleInput}
          placeholder="Introduce password"
          name="password"
          className="form-control mb-3"
        />
        <button className="btn btn-dark" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
