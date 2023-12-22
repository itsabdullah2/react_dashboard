import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import { BrowserRouter } from "react-router-dom";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
