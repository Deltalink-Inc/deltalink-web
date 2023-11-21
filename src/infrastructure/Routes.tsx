import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { AccountType } from "../layouts/register/AccountType";
import { SignUpRedirect } from "../layouts/register/SignUp/SignUpRedirect";
import { Login } from "../layouts/Login";

import { Homepage } from "../layouts/Homepage";
import { ProductCatalog } from "../layouts/Product/Catalog";
import { Checkout } from "../layouts/Order/Checkout";

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
    path: "/order/checkout/:productId",
    element: <Checkout />,
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
