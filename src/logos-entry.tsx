import React from "react";
import ReactDOM from "react-dom/client";
import { Logos3Demo } from "./components/logos3-demo";
import "./index.css";

const logosRoot = document.getElementById("logos-react-root");

if (logosRoot) {
  ReactDOM.createRoot(logosRoot).render(
    <React.StrictMode>
      <Logos3Demo />
    </React.StrictMode>
  );
}
