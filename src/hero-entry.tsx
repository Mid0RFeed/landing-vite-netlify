import React from "react";
import ReactDOM from "react-dom/client";
import { HeroGeometric } from "./components/ui/shape-landing-hero";
import "./index.css";

const heroRoot = document.getElementById("hero-react-root");

if (heroRoot) {
  ReactDOM.createRoot(heroRoot).render(
    <React.StrictMode>
      <HeroGeometric
        title1="IT-проекты"
        title2="и индивидуальное обучение"
      />
    </React.StrictMode>
  );
}
