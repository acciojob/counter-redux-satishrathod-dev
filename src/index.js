import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { CounterProvider } from "./context/CounterContex";

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById("root")
);
