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

  async function handleSubmitDos() {
    

    let body = {email:email, password: password}

    fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body)

    }).then((response)=> {
        console.log(response.status);
        if(response.status == 401) {
            throw "No autorizado"
        }

    }).then((ok) => {  
     errorDiv.innerHTML="<p>Usuario y Contraseña correcta</p>"

}).catch((error)=> {
    errorDiv.innerHTML="<p>Usuario y Contraseña incorrecta";
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
