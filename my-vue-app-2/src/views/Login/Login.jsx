import { useEffect } from "react";
import { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [newUser, setNewUser] = useState({
    email:"",
    password:"",
    name: "",
    surname:""
  })
  console.log(credentials);

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
    

    e.preventDefault()


    fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newUser)

    }).then((response)=> {
        console.log(response.status);
        if(response.status == 401) {
            throw "No autorizado"
        } else if (response.status === 200) {
          alert (`User ${newUser.name} signed-in successfully`)
        } else if (response.status === 200) {
          alert (`Body error`)
        }

    })};
  

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
    <>
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

<div>
<h2 className="text-white">Esto es el SignIn</h2>
<form onSubmit={(event) => signIn(event, newUser)}>
  <input
    type=""
    name="name"
    value={newUser.surname}
    onChange={handleInput}
  />
  <input
    type="email"
    name="email"
    value={newUser.name}
    onChange={handleInput}
  />
  <input
    type="email"
    name="email"
    value={newUser.email}
    onChange={handleInput}
  />
  <input
    type="password"
    name="password"
    value={newUser.password}
    onChange={handleInput}
  />
  <button type="submit">Login</button>
</form>
</div>
</>
  );
}
