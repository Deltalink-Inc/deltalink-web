import React from "react";
import {
  AddressContainer,
  InputContainer,
  InfoAddressLabel,
  InfoAddressInput,
  FirstRow,
  SecondRow,
  ThirdRow,
} from "./styles";

export function AddressForm() {
  return (
    <>
      <AddressContainer>
        <FirstRow>
          <InputContainer>
            <InfoAddressLabel htmlFor="fullName">
              Nome do Destinatario*
            </InfoAddressLabel>
            <InfoAddressInput type="text" id="fullName" required />
          </InputContainer>
          <InputContainer>
            <InfoAddressLabel htmlFor="street">Logradouro*</InfoAddressLabel>
            <InfoAddressInput type="text" id="street" required />
          </InputContainer>
          <InputContainer>
            <InfoAddressLabel htmlFor="houseNumber">Nº*</InfoAddressLabel>
            <InfoAddressInput type="text" id="houseNumber" required />
          </InputContainer>
        </FirstRow>
        <SecondRow>
          <InputContainer>
            <InfoAddressLabel htmlFor="neighborhood">Bairro*</InfoAddressLabel>
            <InfoAddressInput type="text" id="neighborhood" required />
          </InputContainer>
          <InputContainer>
            <InfoAddressLabel htmlFor="city">Cidade*</InfoAddressLabel>
            <InfoAddressInput type="text" id="city" required />
          </InputContainer>
          <InputContainer>
            <InfoAddressLabel htmlFor="state">UF*</InfoAddressLabel>
            <InfoAddressInput type="text" id="state" required />
          </InputContainer>
        </SecondRow>
        <ThirdRow>
        <InputContainer>
          <InfoAddressLabel htmlFor="zipCode">CEP*</InfoAddressLabel>
          <InfoAddressInput type="text" id="zipCode" required />
        </InputContainer>
        <InputContainer>
          <InfoAddressLabel htmlFor="complement">Complemento</InfoAddressLabel>
          <InfoAddressInput type="text" id="complement" />
        </InputContainer>
        <InputContainer>
          <InfoAddressLabel htmlFor="referencePoint">
            Ponto de Referência
          </InfoAddressLabel>
          <InfoAddressInput type="text" id="referencePoint" />
        </InputContainer>
        </ThirdRow>
      </AddressContainer>
    </>
  );
}
