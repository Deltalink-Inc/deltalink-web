import React, { useState } from "react";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <input type={showPassword ? "text" : "password"} placeholder="Senha" />
      <button onClick={handleShowPassword}>
        <i
          className={
            showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
          }
        ></i>
      </button>
    </div>
  );
};

export default Password;
