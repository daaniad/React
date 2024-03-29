import { useState } from "react";
import { useCheckLoginContext } from "../../contexts/AuthContext/logInContext";
const initialUserState = {
  email: "",
  password: "",
  name: "",
  surname: "",
};

export default function Login() {
  const { login, errorMessage, authorization } = useCheckLoginContext();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [newUser, setNewUser] = useState(initialUserState);

  function handleCredentials(event) {
    const newCredentials = {
      ...credentials,
      [event.target.name]: event.target.value,
    };

    setCredentials(newCredentials);
  }

  function handleInput(event) {
    const newSignIn = {
      ...newUser,
      [event.target.name]: event.target.value,
    };

    setNewUser(newSignIn);
  }

  async function signIn(e) {
    e.preventDefault();

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 401) {
        throw "No autorizado";
      } else if (response.status === 200) {
        alert(`User ${newUser.name} signed-in successfully`);
        setNewUser(initialUserState);
      } else if (response.status === 409) {
        alert(`Usuario ya registrado`);
      }
    });
  }

  return (
    <>
      <div>
        <h2 className="text-white">Esto es el Login</h2>
        <form onSubmit={(e) => login(e, credentials)}>
          <input
            type="email"
            name="email"
            required
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

      <div>
        <h2 className="text-white">Esto es el SignIn</h2>
        <form onSubmit={signIn}>
          <input
            type="text"
            name="name"
            placeholder="nombre"
            value={newUser.name}
            onChange={handleInput}
          />
          <input
            type="text"
            name="surname"
            required
            placeholder="apellidos"
            value={newUser.surname}
            onChange={handleInput}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={newUser.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="pass"
            name="password"
            value={newUser.password}
            onChange={handleInput}
          />
          <button type="submit">Sign-In</button>
        </form>
      </div>
    </>
  );
}
