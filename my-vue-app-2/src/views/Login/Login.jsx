import { useEffect } from "react";
import { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  console.log(credentials);

  function handleCredentials(event) {
    const newCredentials = {
      ...credentials,
      [event.target.name]: event.target.value,
    };

    setCredentials(newCredentials);
  }

  function handleSubmitDos(event, credentials) {
    event.preventDefault();

    useEffect(
      function() {
        async function fetchLogin() {
          const response = await fetch(
            `http://localhost:3000/user`
          )
        }
      }
    )
  }

  function handleSubmit(event, credentials) {
    event.preventDefault();
    if (
      credentials.email === "pepe@mail.com" &&
      credentials.password === "hola"
    ) {
      alert("Logged in");
    } else {
      alert("Wrong credentials");
    }

    console.log(credentials);
  }

  return (
    <div>
      <h2 className="text-white">Esto es el Login</h2>
      <form onSubmit={(event) => handleSubmit(event, credentials)}>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleCredentials}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleCredentials}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
