import {
  createContext,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import jwtDecode from "jwt-decode";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiYWxleGRlbHRhY29AZ21haWwuY29tIiwicm9sZSI6MSwiaWF0IjoxNjc0NDg5NTM4LCJleHAiOjE2NzQ0OTMxMzh9.Lk-dZkW3GA-0zCIsf7qfd0fnjrYOwfFQvZPYTrQ0IoM";

const token2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoibmFjaG9AZ21haWwuY29tIiwicm9sZSI6MCwiaWF0IjoxNjc0NDk5MjUwLCJleHAiOjE2NzQ1MDI4NTB9.p6pfsgQ9s_8m8OyE3fHpNnbsG2N_CzNHUBETkCpn5iE";
const AuthContext = createContext({
  auth: {
    email: null,
    role: null,
  },
  login: () => {},
  logout: () => {},
  errorMessage: null,
});

// {"jwt":"fdsjfoisdhfoshdofsd", "role":"2"} --- localStorage
// {jwt: "dfdsfdsfdz", role:2} --- objeto JS

const MY_AUTH_APP = "MY_AUTH_APP";

export default function AuthContexProvider({ children }) {
  const [auth, setAuht] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      email: null,
      role: null,
    }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  function login(e, user) {
    e.preventDefault();
    //Aqui se haria el fetch ------

    if (user.email === "alexdeltaco@gmail.com" && user.password === "12345") {
      setAuht(jwtDecode(token2));
      window.localStorage.setItem(
        MY_AUTH_APP,
        JSON.stringify(jwtDecode(token2))
      );
      setErrorMessage(null);
    } else {
      // La respuesta de la API cuando falle el login
      setErrorMessage("Error al introducir el email o el password");
    }
  }

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuht({
      email: null,
      role: null,
    });
  }

  const value = useMemo(
    {
      auth,
      login,
      logout,
      errorMessage,
    },
    [auth, login, logout, errorMessage]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
