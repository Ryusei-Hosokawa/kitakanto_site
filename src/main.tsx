import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/main.css";
import "./css/dark-mode.css";
import { getBodyElement } from "./getBodyElement.ts";

(function () {
    const body = getBodyElement();
    body.classList.add("transition-all", "duration-500", "ease-in-out");
    if (body.classList.contains("isDark")) {
        body.classList.add("#333");
        body.classList.remove("bg-baseColor");
    } else {
        body.classList.add("bg-baseColor");
        body.classList.remove("#333");
    }
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
