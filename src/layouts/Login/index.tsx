import React from "react";

//@ts-ignore
import { styledComponent } from "./styles.module.css";

import BasicInput from "../../components/Input/BasicInput";
import Password from "../../components/Input/Password";
import BasicButton from "../../components/Button/BasicButton";

const Login = () => {
  return (
    <>
    
      <BasicInput type="email" placeholder="Email" required />
      <Password />
      <BasicButton buttonText="Entrar"/>
    </>
  );
};

export default Login;
