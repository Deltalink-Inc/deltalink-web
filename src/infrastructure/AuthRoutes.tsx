import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AccountType from "../layouts/register/Account_type";
import { SignUp } from "../layouts/register/SignUp";

function getSessionStorager() {
  return JSON.stringify(sessionStorage.getItem("PersonalInformationObj"));
}

export const AuthRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <div>{getSessionStorager()}</div>,
  },
  {
    path: "/register/account-type",
    element: <AccountType />,
  },
  {
    path: "/register/:id",
    element: <SignUp />,
  },
  {
    path: "/register/:personal_data",
    element: <SignUp />,
  },
]);
