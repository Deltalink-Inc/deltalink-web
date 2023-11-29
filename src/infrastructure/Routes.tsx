import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Homepage } from "../layouts/Homepage";
import { Address } from "../layouts/Order/Address";
import { Payment } from "../layouts/Order/Payment";
import { Completed } from "../layouts/Order/Completed";
import { ProductCatalog } from "../layouts/Product/Catalog";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/product/catalog/:categoryId",
    element: <ProductCatalog />,
  },
  {
    path: "/order/address/:productId",
    element: <Address />,
  },
  {
    path: "/order/payment/:productId",
    element: <Payment />,
  },
  {
    path: "/order/completed/",
    element: <Completed />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register/account-type",
  //   element: <AccountType />,
  // },
  // {
  //   path: "/register/:id",
  //   element: <SignUpRedirect />,
  // },
]);
