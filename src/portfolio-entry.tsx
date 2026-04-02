import React from "react";
import ReactDOM from "react-dom/client";
import { Gallery4Demo } from "./components/gallery4-demo";
import "./index.css";

const portfolioRoot = document.getElementById("portfolio-react-root");

if (portfolioRoot) {
  ReactDOM.createRoot(portfolioRoot).render(
    <React.StrictMode>
      <div
        style={{
          width: "100vw",
          maxWidth: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <Gallery4Demo />
      </div>
    </React.StrictMode>
  );
}
