import { func } from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountType = () => {
  const [typeId, setTypeId] = useState("");
  const [disabledNextStepBtn, setDisabledNextStepBtn] = useState(true);

  function handleTypeSelect(id: string) {
    setTypeId(id);
  }

  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>DELTALINK</h1>
      </div>
      <div>
        <h2>Qual tipo de conta você quer criar?</h2>
        <div>
          <label htmlFor="client">
            <input
              type="radio"
              name="selectAccountType"
              id="client"
              onChange={() => {
                handleTypeSelect("01");
                setDisabledNextStepBtn(false);
              }}
            />
            <span>Cliente</span>
          </label>
          <label htmlFor="motoboy">
            <input
              type="radio"
              name="selectAccountType"
              id="motoboy"
              onChange={() => {
                handleTypeSelect("02");
                setDisabledNextStepBtn(false);
              }}
            />
            <span>Motoboy</span>
          </label>
          <label htmlFor="store">
            <input
              type="radio"
              name="selectAccountType"
              id="store"
              onChange={() => {
                handleTypeSelect("03");
                setDisabledNextStepBtn(false);
              }}
            />
            <span>Loja</span>
          </label>
        </div>
        <Link to={`/register/${typeId}`}>
          <button type="button" disabled={disabledNextStepBtn}>
            Próxima Etapa
          </button>
        </Link>
      </div>
    </>
  );
};

export default AccountType;
