import React, { useState } from "react";
import { Link } from "react-router-dom";

export function PersonalInformationForm() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    birth: "",
    gender: "",
  });

  function handleInputChange(e) {
    const { id, value } = e.target;
    setPersonalData({
      ...personalData,
      [id]: value,
    });
  }

  function handleSendData() {
    sessionStorage.setItem("PersonalInformationObj", `${personalData}`);
  }

  return (
    <>
      <h2>Dados Pessoais</h2>
      <div>
        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            required
            value={personalData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="text" id="password" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Telefone</label>
          <input type="text" id="phoneNumber" required />
        </div>
        <div>
          <label htmlFor="birth">Data de Nascimento</label>
          <input type="date" id="birth" required />
        </div>
        <div>
          <label htmlFor="gender">Gênero</label>
          <select id="gender" name="genderSelect" required>
            <option value="undefined">Selecionar</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Não Binário</option>
          </select>
        </div>
        <Link to={"/login"}>
          <button onClick={handleSendData}>Próxima Etapa</button>
        </Link>
      </div>
    </>
  );
}

// - Nome Completo
// - E-mail
// - Senha
// - Número de Telefone
// - Data de Nascimento
// - Gênero
