import React, { useState, useEffect } from "react";

import { sessionSaveData } from "../../../util/sessionSave";

import { AddressForm } from "../../../components/Form/Address";
import { StoreInformationForm } from "../../../components/Form/StoreInformations";
import { StoreContactForm } from "../../../components/Form/StoreContact";

export function SignUpStore() {
  const [storeInformation, setStoreInformation] = useState({
    storeName: "",
    cpnj: "",
    coreBusiness: "",
  });
  const [companyContact, setCompanyContact] = useState({
    name: "",
    positionCompany: "",
    email: "",
    phoneNumber: "",
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

  useEffect(() => {
    console.log(storeInformation);
  }, [storeInformation]);

  function handleSaveRequest(storeInformation, companyContact, addressData) {
    sessionSaveData("storeData", {
      storeInformation: storeInformation,
      companyContact: companyContact,
      addressData: addressData,
    });
  }

  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>DELTALINK</h1>
      </div>
      <StoreInformationForm
        storeInformation={storeInformation}
        setStoreInformation={setStoreInformation}
      />
      <StoreContactForm
        contactInformation={companyContact}
        setContactInformation={setCompanyContact}
      />
      <AddressForm addressData={addressData} setAddressData={setAddressData} />
      <button
        onClick={() => {
          handleSaveRequest(storeInformation, companyContact, addressData);
        }}
      >
        Criar Conta
      </button>
    </>
  );
}
