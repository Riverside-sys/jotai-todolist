import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// 引入样式
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
