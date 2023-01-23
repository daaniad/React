import { createContext, useContext, useState } from "react";

const CheckLogInContext = createContext({
  userMode: "Logout",
  toggleUserMode: () => {},
  authorization: null,
  login: () => {},
  logout: () => {},
  errorMessage: null
});

export default CheckLogInContext;

export function LogInContextProvider({ children }) {
  const [userMode, setUserMode] = useState("Logout");
  const [authorization, setAuthorization] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function login(e, credentials) {
    e.preventDefault();

    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        navigate("/");
        setAuthorization("jhgjhsgjh")
      } else {
        alert("Invalid user or password, try again");
        setErrorMessage("Invalid user or password, try again");
      }
    });
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
    setAuthorization(null);
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
