import React from "react";

import { BasicButton } from "../../components/Button/BasicButton";
import { Password } from "../../components/Input/Password";

export function Login() {
  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>DELTALINK</h1>
        <h1>Acesse sua conta</h1>
      </div>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <Password />
        </div>
      </div>
      <BasicButton text="Entrar" />
    </>
  );
}
