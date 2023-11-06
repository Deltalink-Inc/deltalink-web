import React from "react";
import { handleInputChange } from "../../util/handleInputChange";

import { Password } from "../Input/Password";

export function PersonalInformationForm({ personalData, setPersonalData }) {
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
            onChange={() => {
              handleInputChange(personalData, setPersonalData, event);
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            required
            value={personalData.email}
            onChange={() => {
              handleInputChange(personalData, setPersonalData, event);
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <Password />
        </div>
        <div>
          <label htmlFor="phoneNumber">Telefone</label>
          <input
            type="text"
            id="phoneNumber"
            required
            value={personalData.phoneNumber}
            onChange={() => {
              handleInputChange(personalData, setPersonalData, event);
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="birth">Data de Nascimento</label>
          <input
            type="date"
            id="birth"
            required
            value={personalData.birth}
            onChange={() => {
              handleInputChange(personalData, setPersonalData, event);
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="gender">Gênero</label>
          <select
            id="gender"
            name="genderSelect"
            required
            value={personalData.gender}
            onChange={() => {
              handleInputChange(personalData, setPersonalData, event);
            }}
          >
            <option value="undefined">Selecionar</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Não Binário</option>
          </select>
        </div>
      </div>
    </>
  );
}
