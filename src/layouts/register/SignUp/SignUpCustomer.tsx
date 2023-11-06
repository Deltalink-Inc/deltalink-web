import React, { useState, useEffect } from "react";

import { sessionSaveData } from "../../../util/sessionSave";

import { AddressForm } from "../../../components/Form/Address";
import { PersonalInformationForm } from "../../../components/Form/PersonalInformation";
import { PreferencesForm } from "../../../components/Form/Preferences";

export function SignUpCustomer() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    birth: "",
    gender: "",
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

  function handleSaveRequest(personalData, addressData) {
    sessionSaveData("customerData", {
      personalData: personalData,
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
      <AddressForm addressData={addressData} setAddressData={setAddressData} />
      <button
        onClick={() => {
          handleSaveRequest(personalData, addressData);
        }}
      >
        Criar Conta
      </button>
    </>
  );
}
