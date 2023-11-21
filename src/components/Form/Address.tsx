import React from "react";
import { handleInputChange } from "../../util/handleInputChange";

export function AddressForm() {
  return (
    <>
      <div>
        <div>
          <label htmlFor="fullName">Nome do Destinatario*</label>
          <input type="text" id="fullName" required />
        </div>
        <div>
          <label htmlFor="street">Logradouro*</label>
          <input type="text" id="street" required />
        </div>
        <div>
          <label htmlFor="houseNumber">Nº*</label>
          <input type="text" id="houseNumber" required />
        </div>
        <div>
          <label htmlFor="neighborhood">Bairro*</label>
          <input type="text" id="neighborhood" required />
        </div>
        <div>
          <label htmlFor="city">Cidade*</label>
          <input type="text" id="city" required />
        </div>
        <div>
          <label htmlFor="state">UF*</label>
          <input type="text" id="state" required />
        </div>
        <div>
          <label htmlFor="zipCode">CEP*</label>
          <input type="text" id="zipCode" required />
        </div>
        <div>
          <label htmlFor="complement">Complemento</label>
          <input type="text" id="complement" />
        </div>
        <div>
          <label htmlFor="referencePoint">Ponto de Referência</label>
          <input type="text" id="referencePoint" />
        </div>
      </div>
    </>
  );
}
