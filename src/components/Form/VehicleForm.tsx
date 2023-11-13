import React from "react";
import { handleInputChange } from "../../util/handleInputChange";

export function MotorcycleForm({ motorcycleData, setMotorcycleData }) {
  return (
    <>
      <h2>Informações do Motocicleta</h2>
      <div>
        <div>
          <label htmlFor="make">Marca</label>
          <input
            type="text"
            id="make"
            required
            value={motorcycleData.make}
            onChange={() => {
              handleInputChange(motorcycleData, setMotorcycleData, event);
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="model">Modelo</label>
          <input
            type="text"
            id="model"
            required
            value={motorcycleData.model}
            onChange={() => {
              handleInputChange(motorcycleData, setMotorcycleData, event);
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="registrationPlate">Placa da Motocicleta</label>
          <input
            type="text"
            id="registrationPlate"
            required
            value={motorcycleData.registrationPlate}
            onChange={() => {
              handleInputChange(motorcycleData, setMotorcycleData, event);
            }}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="yearManufacture">Ano de Fabricação</label>
          <input
            type="date"
            id="yearManufacture"
            required
            value={motorcycleData.yearManufacture}
            onChange={() => {
              handleInputChange(motorcycleData, setMotorcycleData, event);
            }}
            autoComplete="off"
          />
        </div>
      </div>
    </>
  );
}
