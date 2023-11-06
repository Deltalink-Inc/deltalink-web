import React, { useState } from "react";

export function StoreInformationForm() {
  const [storeData, setStoreData] = useState({
    storeName: "",
    companyName: "",
    cpnj: "",
    coreBusiness: "",
  });

  function handleInputChange(e) {
    const { id, value } = e.target;
    setStoreData({
      ...storeData,
      [id]: value,
    });
  }
  return (  
    <>
      <h2>Dados Pessoais</h2>
      <div>
        <div>
          <label htmlFor="storeName">Nome da Loja</label>
          <input
            type="text"
            id="storeName"
            required
            value={storeData.storeName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="companyName">Razão Social</label>
          <input type="text" id="companyName" required />
        </div>
        <div>
          <label htmlFor="cpnj">CPNJ</label>
          <input type="text" id="cpnj" required />
        </div>
        <div>
          <label htmlFor="coreBusiness">Setor de Atuação</label>
          <input type="text" id="coreBusiness" required />
        </div>
      </div>
    </>
  );
}
