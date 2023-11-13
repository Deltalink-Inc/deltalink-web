import React from "react";
import { handleInputChange } from "../../util/handleInputChange";

export function DocumentationForm({ documentation, setDocumentation }) {
  return (
    <>
      <h2>Documentação</h2>
      <div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            required
            value={documentation.cpf}
            onChange={() => {
              handleInputChange(documentation, setDocumentation, event);
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="cnh">CNH</label>
          <input
            type="text"
            id="cnh"
            required
            value={documentation.cnh}
            onChange={() => {
              handleInputChange(documentation, setDocumentation, event);
            }}
            autoComplete="off"
          />
          <div>
            <label htmlFor="cnhFile">Foto da CNH</label>
            <input
              type="file"
              id="cnhFile"
              required
              value={documentation.cnhFile}
              onChange={() => {
                handleInputChange(documentation, setDocumentation, event);
              }}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </>
  );
}
