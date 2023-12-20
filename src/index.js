import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <ContextProvider>
    <App basename={process.env.PUBLIC_URL} />
  </ContextProvider>
);
