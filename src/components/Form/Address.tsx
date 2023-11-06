import React from "react";
import { handleInputChange } from "../../util/handleInputChange";

export function AddressForm({ addressData, setAddressData }) {
  return (
    <>
      <h2>Endereço</h2>
      <div>
        <div>
          <label htmlFor="street">Rua</label>
          <input
            type="text"
            id="street"
            value={addressData.street}
            onChange={() => {
              handleInputChange(addressData, setAddressData, event);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="houseNumber">Número</label>
          <input
            type="text"
            id="houseNumber"
            value={addressData.houseNumber}
            onChange={() => {
              handleInputChange(addressData, setAddressData, event);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="complement">Complemento</label>
          <input
            type="text"
            id="complement"
            value={addressData.complement}
            onChange={() => {
              handleInputChange(addressData, setAddressData, event);
            }}
          />
        </div>
        <div>
          <label htmlFor="neighborhood">Bairro</label>
          <input
            type="text"
            id="neighborhood"
            value={addressData.neighborhood}
            onChange={() => {
              handleInputChange(addressData, setAddressData, event);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            value={addressData.city}
            onChange={() => {
              handleInputChange(addressData, setAddressData, event);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="state">Estado</label>
          <input
            type="text"
            id="state"
            value={addressData.state}
            onChange={() => {
              handleInputChange(addressData, setAddressData, event);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="zipCode">CEP</label>
          <input
            type="text"
            id="zipCode"
            value={addressData.zipCode}
            onChange={() => {
              handleInputChange(addressData, setAddressData, event);
            }}
            required
          />
        </div>
      </div>
    </>
  );
}
