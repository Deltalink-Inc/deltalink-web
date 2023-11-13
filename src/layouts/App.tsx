import React from "react";
import { RouterProvider } from "react-router-dom";

import { register } from "swiper/element/bundle";
register();

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import { AuthRoutes } from "../infrastructure/AuthRoutes";
// import { PublicRoutes } from "../infrastructure/PublicRoutes";
import { Routes } from "../infrastructure/Routes";

const App = () => {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
};

export default App;
