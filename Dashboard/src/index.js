import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { LoginProvider } from "./context/loginContext";
import "react-loading-skeleton/dist/skeleton.css";
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
