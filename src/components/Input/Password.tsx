import React, { useState } from "react";

export function Password() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <label htmlFor="password">Senha</label>
      <input type={showPassword ? "text" : "password"} autoComplete="off" />
      <button onClick={handleShowPassword}>
        <i
          className={
            showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
          }
        ></i>
      </button>
    </div>
  );
}
