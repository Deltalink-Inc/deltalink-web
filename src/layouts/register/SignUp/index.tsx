import React from "react";
import { Link, useParams } from "react-router-dom";

import { AddressForm } from "../../../components/Form/Address";
import { PersonalInformationForm } from "../../../components/Form/PersonalInformation";

export function SignUp() {
  const { id } = useParams();

  function handleNextStep() {}

  function renderForm() {
    switch (id) {
      case "01":
        return <PersonalInformationForm />;
      case "02":
        return <PersonalInformationForm />;
      case "03":
        return <AddressForm />;
    }
  }
  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>DELTALINK</h1>
      </div>
      {renderForm()}
    </>
  );
}
