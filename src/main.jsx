import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={AppRouter}/>
    </ThemeProvider>
  </React.StrictMode>
);