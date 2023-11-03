import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { AuthRoutes } from "../infrastructure/AuthRoutes";
import { PublicRoutes } from "../infrastructure/PublicRoutes";

const App = () => {
  return (
    <>
      {/* <RouterProvider router={PublicRoutes} /> */}

      <RouterProvider router={AuthRoutes} />
    </>
  );
};

export default App;
