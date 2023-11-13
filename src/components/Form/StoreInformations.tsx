import React from "react";
import { handleInputChange } from "../../util/handleInputChange";

export function StoreInformationForm({
  storeInformation,
  setStoreInformation,
}) {
  return (
    <>
      <h2>Informações da Loja</h2>
      <div>
        <div>
          <label htmlFor="storeName">Nome da Loja</label>
          <input
            type="text"
            id="storeName"
            required
            value={storeInformation.storeName}
            onChange={() => {
              handleInputChange(storeInformation, setStoreInformation, event);
            }}
          />
        </div>
        <div>
          <label htmlFor="cpnj">CPNJ</label>
          <input
            type="text"
            id="cpnj"
            required
            value={storeInformation.cpnj}
            onChange={() => {
              handleInputChange(storeInformation, setStoreInformation, event);
            }}
          />
        </div>
        <div>
          <label htmlFor="coreBusiness">Setor de Atuação</label>
          <input
            type="text"
            id="coreBusiness"
            required
            value={storeInformation.coreBusiness}
            onChange={() => {
              handleInputChange(storeInformation, setStoreInformation, event);
            }}
          />
        </div>
      </div>
    </>
  );
}
