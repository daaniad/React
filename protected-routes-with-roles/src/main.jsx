import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContexProvider from "./context/AuthContext/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContexProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
