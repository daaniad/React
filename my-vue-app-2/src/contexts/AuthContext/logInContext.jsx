import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const CheckLogInContext = createContext({
  userMode: "Logout",
  toggleUserMode: () => {},
  authorization: {
    email: null,
    role: null,
  },
  login: () => {},
  logout: () => {},
  errorMessage: "Error al introducir email o password",
});

export default CheckLogInContext;

const MY_AUTH_APP = "MY_AUTH_APP";

export function LogInContextProvider({ children }) {
  const [userMode, setUserMode] = useState("Logout");
  const [authorization, setAuthorization] = useState(JSON.parse(
    window.localStorage.getItem(MY_AUTH_APP)) ?? {
      email: null,
      role: null,
    }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  async function login(e, credentials) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (response.status === 200) {
      const userCredentials = await response.json();
      const userData = jwt_decode(userCredentials.jwt)
      setAuthorization({...userData,token:userCredentials.jwt});
      window.localStorage.setItem(MY_AUTH_APP, JSON.stringify({...userData,token:userCredentials.jwt}));
      setErrorMessage(null)
    } else {
      
      setErrorMessage("Invalid user or password, try again");
    }
  }

  function toggleLogin() {
    setUserMode(function (oldUserMode) {
      if (oldUserMode === "Logout") {
        return "Login";
      } else {
        return "Logout";
      }
    });
  }

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization({
      email: null,
      role: null,
    });
  }

  const value = {
    userMode,
    toggleLogin,
    authorization,
    errorMessage,
    login,
    logout,
  };

  return (
    <CheckLogInContext.Provider value={value}>
      {children}
    </CheckLogInContext.Provider>
  );
}

export function useCheckLoginContext() {
  return useContext(CheckLogInContext);
}