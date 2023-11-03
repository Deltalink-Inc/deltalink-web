import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <h1>Homepage</h1>,
  },

  {
    path: "/about",
    element: <h1>Sobre</h1>,
  },
]);
