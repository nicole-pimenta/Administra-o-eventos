import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DrinksProvider } from "./Providers/Drinks";

ReactDOM.render(
  <React.StrictMode>
    <DrinksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DrinksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
