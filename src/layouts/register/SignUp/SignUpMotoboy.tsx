import React, { useEffect, useState } from "react";

import { sessionSaveData } from "../../../util/sessionSave";

import { AddressForm } from "../../../components/Form/Address";
import { DocumentationForm } from "../../../components/Form/Documentation";
import { PersonalInformationForm } from "../../../components/Form/PersonalInformation";
import { PreferencesForm } from "../../../components/Form/Preferences";
import { MotorcycleForm } from "../../../components/Form/VehicleForm";

export function SignUpMotoboy() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    birth: "",
    gender: "",
  });
  const [documentation, setDocumentation] = useState({
    cpf: "",
    cnh: "",
    cnhFile: "",
  });
  const [motorcycleData, setMotorcycleData] = useState({
    make: "",
    model: "",
    registrationPlate: "",
    yearManufacture: "",
  });
  const [addressData, setAddressData] = useState({
    street: "",
    houseNumber: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
  });

  function handleSaveRequest(
    personalData,
    documentation,
    motorcycleData,
    addressData
  ) {
    sessionSaveData("motoboyData", {
      personalData: personalData,
      documentation: documentation,
      motorcycleData: motorcycleData,
      addressData: addressData,
    });
  }

  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>DELTALINK</h1>
      </div>
      <PersonalInformationForm
        personalData={personalData}
        setPersonalData={setPersonalData}
      />
      <PreferencesForm />
      <DocumentationForm
        documentation={documentation}
        setDocumentation={setDocumentation}
      />
      <MotorcycleForm
        motorcycleData={motorcycleData}
        setMotorcycleData={setMotorcycleData}
      />
      <AddressForm addressData={addressData} setAddressData={setAddressData} />
      <button
        onClick={() => {
          handleSaveRequest(
            personalData,
            documentation,
            motorcycleData,
            addressData
          );
        }}
      >
        Criar Conta
      </button>
    </>
  );
}
