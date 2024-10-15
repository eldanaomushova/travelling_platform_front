import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./app/routes/AppRouter";
import { RouterProvider } from "react-router-dom";
import "./app/styles/index.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
