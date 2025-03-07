import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";

const root = document.querySelector("#root");

// //view
// const app = createElement("p", null, "Project Categories");

// render view

createRoot(root).render(<RouterProvider router={router} />);
