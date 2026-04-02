import React from "react";
import ReactDOM from "react-dom/client";

import { RadialOrbitalTimelineDemo } from "./components/radial-orbital-timeline-demo";
import "./index.css";

const advantagesRoot = document.getElementById("advantages-react-root");

if (advantagesRoot) {
  ReactDOM.createRoot(advantagesRoot).render(
    <React.StrictMode>
      <div
        style={{
          width: "100vw",
          maxWidth: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <RadialOrbitalTimelineDemo />
      </div>
    </React.StrictMode>
  );
}
