import React from "react";
import { Link } from "react-router-dom";

export function AddressForm() {
  return (
    <>
      <h2>Endereço</h2>
      <div>
        <div>
          <label htmlFor="street">Rua</label>
          <input type="text" id="street" required />
        </div>
        <div>
          <label htmlFor="houseNumber">Número</label>
          <input type="text" id="houseNumber" required />
        </div>
        <div>
          <label htmlFor="complement">Complemento</label>
          <input type="text" id="complement" />
        </div>
        <div>
          <label htmlFor="neighborhood">Bairro</label>
          <input type="text" id="neighborhood" required />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" required />
        </div>
        <div>
          <label htmlFor="state">Estado</label>
          <input type="text" id="state" required />
        </div>
        <div>
          <label htmlFor="zipCode">CEP</label>
          <input type="text" id="zipCode" required />
        </div>
      </div>
    </>
  );
}

// - Rua
// - Número
// - Complemento
// - Bairro
// - Cidade
// - Estado
// - CEP
