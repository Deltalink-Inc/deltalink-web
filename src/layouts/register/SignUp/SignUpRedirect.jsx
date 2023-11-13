import React from "react";
import { useParams } from "react-router-dom";

import { SignUpCustomer } from "./SignUpCustomer";
import { SignUpMotoboy } from "./SignUpMotoboy";
import { SignUpStore } from "./SignUpStore";

export function SignUpRedirect() {
  const { id } = useParams();

  switch (id) {
    case "01":
      return <SignUpCustomer />;
    case "02":
      return <SignUpMotoboy />;
    case "03":
      return <SignUpStore />;
  }
}
