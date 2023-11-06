import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AccountType from "../layouts/register/AccountType";
import { SignUpRedirect } from "../layouts/register/SignUp/SignUpRedirect";

export const AuthRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register/account-type",
    element: <AccountType />,
  },
  {
    path: "/register/:id",
    element: <SignUpRedirect />,
  },
]);
