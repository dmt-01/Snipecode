import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { StrictMode } from "react";
import Router from "./routes";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  </StrictMode>
);
