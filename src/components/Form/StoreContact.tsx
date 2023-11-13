import React from "react";
import { handleInputChange } from "../../util/handleInputChange";

export function StoreContactForm({
  contactInformation,
  setContactInformation,
}) {
  return (
    <>
      <h2>Contato da Empresa</h2>
      <div>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            required
            value={contactInformation.name}
            onChange={() => {
              handleInputChange(
                contactInformation,
                setContactInformation,
                event
              );
            }}
          />
        </div>
        <div>
          <label htmlFor="positionCompany">Cargo</label>
          <input
            type="text"
            id="positionCompany"
            required
            value={contactInformation.positionCompany}
            onChange={() => {
              handleInputChange(
                contactInformation,
                setContactInformation,
                event
              );
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={contactInformation.email}
            onChange={() => {
              handleInputChange(
                contactInformation,
                setContactInformation,
                event
              );
            }}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Telefone</label>
          <input
            type="tel"
            id="phoneNumber"
            required
            value={contactInformation.phoneNumber}
            onChange={() => {
              handleInputChange(
                contactInformation,
                setContactInformation,
                event
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
