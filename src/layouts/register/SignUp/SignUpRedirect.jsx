import React from "react";
import { useParams } from "react-router-dom";

import { SignUpCustomer } from "./SignUpCustomer";

export function SignUpRedirect() {
  const { id } = useParams();

  switch (id) {
    case "01":
      return <SignUpCustomer />;
    case "02":
      return <h1>MOTOBOY</h1>;
    case "03":
      return <h1>LOJA</h1>;
  }
}
